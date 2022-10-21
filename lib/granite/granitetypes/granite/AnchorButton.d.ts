import { IconSize } from "../../../icons";
import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { ActionBarSize, AnchorVariant, LinkCheckerSkip } from "./LiteralTypes";
export interface IAnchorButton extends ICommonAttributes, IRenderCondition {
    href?: string;
    href_i18n?: string;
    target?: string;
    text?: string;
    hideText?: boolean;
    "x-cq-linkchecker"?: LinkCheckerSkip;
    icon?: string;
    iconSize?: IconSize;
    size?: ActionBarSize;
    block?: boolean;
    variant?: AnchorVariant;
    command?: string;
    actionConfigName?: string;
}
