import { AemNode } from './AemNode';
import { Checkbox, CheckboxOptions } from './fields/Checkbox';
import { TextField, TextFieldOptions } from './fields/TextField';
import { ResourceType } from './types';

export function createTabsDialog(title: string, tabs: AemNode[]): AemNode {
    const root = new AemNode('jcr:root', 'cq/gui/components/authoring/dialog', [
        { field: 'jcr:title', value: title },
        { field: 'xmlns:cq', value: 'http://www.day.com/jcr/cq/1.0' },
        {
            field: 'xmlns:granite',
            value: 'http://www.adobe.com/jcr/granite/1.0',
        },
        { field: 'xmlns:jcr', value: 'http://www.jcp.org/jcr/1.0' },
        { field: 'xmlns:nt', value: 'http://www.jcp.org/jcr/nt/1.0' },
        {
            field: 'xmlns:sling',
            value: 'http://sling.apache.org/jcr/sling/1.0',
        },
    ]);
    // root.setResourceType(ResourceType.DIALOG);
    const content = new AemNode('content', ResourceType.CONTAINER);
    const tabsWrapper = new AemNode('tabs', ResourceType.TABS);
    tabsWrapper.items(tabs);
    content.items([tabsWrapper]);
    root.addChild(content);

    return root;
}

export function createTextField(options: TextFieldOptions): TextField {
    return new TextField(options);
}

export function createCheckboxField(options: CheckboxOptions): Checkbox {
    return new Checkbox(options);
}

export function createTab(
    idx: number,
    title: string,
    fields: AemNode[]
): AemNode {
    const tab = new AemNode(`tab${idx}`, ResourceType.CONTAINER, [
        { field: 'jcr:title', value: title },
        { field: 'margin', value: '{Boolean}true' },
    ]);
    tab.items([createColumns([createColumn(fields)])]);

    return tab;
}

export function createColumns(columns: AemNode[]): AemNode {
    const columnsWrapper = new AemNode('columns', ResourceType.FIXED_COLUMNS, [
        { field: 'margin', value: '{Boolean}true' },
    ]);
    columnsWrapper.items(columns);

    return columnsWrapper;
}

export function createColumn(els: AemNode[]): AemNode {
    const column = new AemNode('column', ResourceType.CONTAINER);
    column.items(els);

    return column;
}
