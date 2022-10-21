import { IFormField } from "../form";
import { ImpersonableUserFilter, Selector, ServiceUserFilter, ValueType } from "../LiteralTypes";

export const resourceType = "/libs/granite/ui/components/coral/foundation/authorizable/autocomplete";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface IAuthorizableAutocomplete extends IFormField {
    name?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    validation?: string[];

    multiple?: boolean;

    forceSelection?: boolean;

    deleteHint?: boolean; // =true

    valueType?: ValueType;

    selector?: Selector;

    serviceUserFilter?: ServiceUserFilter;

    impersonableUserFilter?: ImpersonableUserFilter;
}
