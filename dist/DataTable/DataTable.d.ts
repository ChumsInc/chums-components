import { DataTableProps } from "./DataTable.types";
export default function DataTable<T = unknown>({ fields, data, keyField, size, rowClassName, renderRow, onSelectRow, selected, className, tfoot, children, ...rest }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
