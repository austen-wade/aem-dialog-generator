import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/form/field";

export interface FormField extends CommonAttributes, RenderCondition {
    fieldLabel?: string;

    fieldLabel_commentI18n?: string;

    fieldDescription?: string;

    renderReadOnly?: boolean;

    showEmptyInReadOnly?: boolean;

    renderHidden?: boolean;

    wrapperClass?: string;

    tooltipPosition?: string; // < 'right', 'left', 'top', 'bottom'
}
