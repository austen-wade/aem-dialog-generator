import { IconSize } from "../../../../icons";
import { FileUploadSize, FileUploadVariant } from "../LiteralTypes";
import { IFormField } from "./Field";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/fileupload";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface IFormFileUpload extends IFormField {
    name?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    async?: boolean;

    validation?: string[];

    multiple?: boolean;

    autoStart?: boolean;

    uploadUrl?: string;

    sizeLimit?: number;

    mimeTypes?: string[];

    text?: string;

    hideText?: boolean;

    icon?: string;

    iconSize?: IconSize;

    size?: FileUploadSize;

    variant?: FileUploadVariant;
}
