import React, { ReactNode, TableHTMLAttributes } from 'react';
import { DataTableClassNames, DataTableField } from "./types";
export interface DataTableTBodyProps<T = any> extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField<T>[];
    data: any[];
    keyField: string | number | ((row: T) => string | number);
    rowClassName?: DataTableClassNames;
    renderRow?: (row: T) => React.ReactNode;
    onSelectRow?: (row: T) => any | void;
    selected?: string | number | ((row: T) => boolean);
    children?: ReactNode;
}
declare const DataTableTBody: ({ fields, data, keyField, rowClassName, renderRow, onSelectRow, selected, children, ...rest }: DataTableTBodyProps) => JSX.Element;
export default DataTableTBody;
