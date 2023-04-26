import React, { TableHTMLAttributes } from "react";
import { SortableTableField } from "../types";
export interface SortableTRProps extends TableHTMLAttributes<HTMLTableRowElement> {
    rowClassName?: string | object | ((any: any) => string | object);
    selected?: boolean;
    fields: SortableTableField[];
    row: any;
    trRef?: React.LegacyRef<HTMLTableRowElement>;
    onClick?: (any?: any) => any;
}
