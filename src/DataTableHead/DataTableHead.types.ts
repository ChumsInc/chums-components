import {TableHTMLAttributes} from "react";
import {DataTableField} from "../types";

export interface DataTableHeadProps<T = any> extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField<T>[];
}
