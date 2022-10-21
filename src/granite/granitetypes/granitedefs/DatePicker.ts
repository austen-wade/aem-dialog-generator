import { FormField } from "./Field";
import { DatePickerType } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/datepicker";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface FormDatePicker extends FormField {
    name?: string;

    typeHint?: string; // ='Date'

    value?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    validation?: string[];

    type?: DatePickerType;

    displayedFormat?: string;

    valueFormat: string; // = 'YYYY-MM-DD[T]HH:mm?:ss.SSSZ'

    minDate?: string;

    maxDate?: string;

    displayTimezoneMessage?: boolean;

    beforeSelector?: string;

    afterSelector?: string;
}
