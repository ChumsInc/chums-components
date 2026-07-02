import { type ChangeEvent, type LabelHTMLAttributes, type ReactNode } from 'react';
import type { SearchCustomer } from "./customer-autocomplete-types";
import { type AutocompleteInputProps, type AutocompleteRootProps } from "@base-ui/react/autocomplete";
export interface CustomerAutocompleteProps extends AutocompleteRootProps<SearchCustomer> {
    slotProps?: {
        label?: string;
        labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
        inputProps?: AutocompleteInputProps;
    };
    customer: SearchCustomer | null;
    onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
    onSelectCustomer: (customer?: SearchCustomer | null) => void;
    children?: ReactNode;
}
declare function CustomerAutocomplete({ slotProps, customer, onSelectCustomer, ...rootProps }: CustomerAutocompleteProps): import("react").JSX.Element;
declare namespace CustomerAutocomplete {
    var displayName: string;
}
export default CustomerAutocomplete;
//# sourceMappingURL=CustomerAutocomplete.d.ts.map