import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";
import { Alignment, SelectionMode, SortMode, SortType } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/table";
export interface Table extends CommonAttributes, RenderCondition, GraniteContainer {
    selectionMode?: SelectionMode;

    selectionCount?: string; // ='multiple'

    src?: string;

    path?: string;

    itemResourceType?: string;

    limit?: number; // ='40'

    size?: number;

    sortMode?: SortMode;

    orderable?: boolean;

    rowReorderAction?: string;

    "rowReorderAction.abs"?: string;

    metaPath?: string;

    metaResourceType?: string;

    modeGroup?: string;

    skipEmptyRow?: boolean;

    columns?: GraniteNode | GraniteNode[];

    columnsdatasource?: GraniteNode | GraniteNode[];

    emptyrow?: GraniteNode | GraniteNode[];
}

export interface TableColumn {
    name?: string;

    select?: boolean;

    order?: boolean;

    "jcr:title"?: string;

    alignment?: Alignment;

    fixedWidth?: boolean;

    draggable?: boolean;

    hidden?: boolean;

    sortable?: boolean;

    sortType?: SortType;
}
