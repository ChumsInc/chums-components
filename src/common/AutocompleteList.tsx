import styled from '@emotion/styled';
import {Autocomplete} from "@base-ui/react";

const AutocompleteList = styled(Autocomplete.List)`
    max-height: 50vh;
    overflow-y: auto;
`

export default AutocompleteList;
