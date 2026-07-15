import { type ChangeEvent, type LabelHTMLAttributes, type ReactNode } from 'react';
import type { SearchItem } from "chums-types";
import { type AutocompleteInputProps, type AutocompleteRootProps } from "@base-ui/react";
export interface ItemAutocompleteProps extends AutocompleteRootProps<SearchItem> {
    slotProps?: {
        label?: string;
        labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
        inputProps?: AutocompleteInputProps;
    };
    item: string | null;
    data?: SearchItem[];
    onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
    onSelectItem: (item?: SearchItem | null) => void;
    children?: ReactNode;
}
declare function ItemAutocomplete({ slotProps, item, data, onSelectItem, children, ...rootProps }: ItemAutocompleteProps): import("react").JSX.Element;
declare namespace ItemAutocomplete {
    var displayName: string;
}
export default ItemAutocomplete;
//# sourceMappingURL=ItemAutocomplete.d.ts.map