import { TableHTMLAttributes } from "react";
import { DataTableField } from "./types";
export interface DataTableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField[];
}
declare const DataTableHead: ({ fields, ...rest }: DataTableHeadProps) => JSX.Element;
export default DataTableHead;
