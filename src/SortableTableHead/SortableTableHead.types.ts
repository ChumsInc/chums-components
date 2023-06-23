import {DataTableHeadProps} from "../DataTableHead";
import {SortableTableField, SortProps} from "../types";

export interface SortableTableHeadProps<T = any> extends DataTableHeadProps {
    currentSort: SortProps<T>,
    fields: SortableTableField<T>[],
    onChangeSort: (sort: SortProps<T>) => void,
}

