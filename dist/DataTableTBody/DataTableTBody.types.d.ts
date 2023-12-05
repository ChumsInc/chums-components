import React, { ReactNode, TableHTMLAttributes } from "react";
import { DataTableClassNames, DataTableField } from "../types";
export interface DataTableTBodyProps<T = any> extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField<T>[];
    data: T[];
    keyField: string | number | ((row: T) => string | number);
    rowClassName?: DataTableClassNames<T>;
    renderRow?: (row: T) => React.ReactNode;
    onSelectRow?: (row: T) => any | void;
    selected?: string | number | ((row: T) => boolean);
    children?: ReactNode;
}
