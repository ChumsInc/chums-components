import { SortableTableProps } from "./SortableTable.types";
export default function SortableTable<T = unknown>({ fields, data, currentSort, onChangeSort, keyField, size, rowClassName, renderRow, onSelectRow, selected, className, tfoot, children, ...rest }: SortableTableProps<T>): import("react/jsx-runtime").JSX.Element;
