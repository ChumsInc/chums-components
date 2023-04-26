import { TableHTMLAttributes } from "react";
import { DataTableField } from "../types";
export interface DataTableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField[];
}
