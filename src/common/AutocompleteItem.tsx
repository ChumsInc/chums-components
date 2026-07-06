import styled from '@emotion/styled';
import {Autocomplete} from "@base-ui/react";

const AutocompleteItem = styled(Autocomplete.Item)`
    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
    color: var(--bs-dropdown-link-color);
    &[data-highlighted] {
        background-color: var(--bs-dropdown-link-active-bg);
        color: var(--bs-dropdown-link-active-color)
    }
`

export default AutocompleteItem;
