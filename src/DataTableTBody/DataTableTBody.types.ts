import React, {ReactNode, TableHTMLAttributes} from "react";
import {DataTableClassNames, DataTableField} from "../types";

export interface DataTableTBodyProps<T = unknown> extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField<T>[],
    data: T[],
    keyField: keyof T | ((row: T) => keyof T),
    rowClassName?: DataTableClassNames<T>;
    renderRow?: (row: T) => React.ReactNode;
    onSelectRow?: (row: T) => T | void,
    selected?: string | number | ((row: T) => boolean),
    children?: ReactNode,
}

