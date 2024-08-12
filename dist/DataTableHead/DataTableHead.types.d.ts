import { TableHTMLAttributes } from "react";
import { DataTableField } from "../types";
export interface DataTableHeadProps<T = unknown> extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField<T>[];
}
