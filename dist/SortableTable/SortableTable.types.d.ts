import { DataTableProps } from "../DataTable";
import { SortProps } from "../types";
export interface SortableTableProps<T = any> extends DataTableProps<T> {
    currentSort: SortProps<T>;
    onChangeSort: (sort: SortProps<T>) => void;
}
