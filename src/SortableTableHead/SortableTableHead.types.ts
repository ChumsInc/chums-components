import {DataTableHeadProps} from "../DataTableHead";
import {SortableTableField, SortProps} from "../types";

export interface SortableTableHeadProps extends DataTableHeadProps {
    currentSort: SortProps,
    fields: SortableTableField[],
    onChangeSort: (sort: SortProps) => void,
}

