import styled from '@emotion/styled';
import {Autocomplete} from "@base-ui/react";

const AutocompletePositioner = styled(Autocomplete.Positioner)`
    z-index: 5;
    box-shadow: var(--bs-box-shadow);
    border-radius: var(--bs-border-radius);
`

export default AutocompletePositioner;
