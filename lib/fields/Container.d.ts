import { AemNode, BaseOptions } from "../AemNode";
export interface ContainerOptions extends BaseOptions {
    margin?: boolean;
    maximized?: boolean;
    "granite:class"?: string;
}
export declare class Container extends AemNode {
    constructor(tag?: string, options?: ContainerOptions);
}
