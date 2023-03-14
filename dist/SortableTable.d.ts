/// <reference types="react" />
import { SortProps } from "./types";
import { DataTableProps } from "./DataTable";
export interface SortableTableProps<T = any> extends DataTableProps<T> {
    currentSort: SortProps<T>;
    onChangeSort: (sort: SortProps<T>) => void;
}
declare const SortableTable: ({ fields, data, currentSort, onChangeSort, keyField, size, rowClassName, renderRow, onSelectRow, selected, className, tfoot, children, ...rest }: SortableTableProps) => JSX.Element;
export default SortableTable;
