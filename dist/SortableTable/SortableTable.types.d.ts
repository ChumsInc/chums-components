import { DataTableProps } from "../DataTable";
import { SortProps } from "../types";
export interface SortableTableProps<T = unknown> extends DataTableProps<T> {
    currentSort: SortProps<T>;
    onChangeSort: (sort: SortProps<T>) => void;
}
