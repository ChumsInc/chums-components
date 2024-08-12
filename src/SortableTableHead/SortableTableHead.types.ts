import {DataTableHeadProps} from "../DataTableHead";
import {SortableTableField, SortProps} from "../types";

export interface SortableTableHeadProps<T = unknown> extends DataTableHeadProps<T> {
    currentSort: SortProps<T>,
    fields: SortableTableField<T>[],
    onChangeSort: (sort: SortProps<T>) => void,
}

