import React, { ReactNode, TableHTMLAttributes } from 'react';
import { BootstrapSize, DataTableClassNames, DataTableField } from "./types";
import DataTableHead from "./DataTableHead";
import DataTableTBody from "./DataTableTBody";
export { default as DataTableRow } from './DataTableRow';
export { default as DataTableTH } from './DataTableTH';
export { DataTableHead, DataTableTBody };
export type { DataTableHeadProps } from './DataTableHead';
export type { DataTableRowProps } from './DataTableRow';
export type { DataTableTBodyProps } from './DataTableTBody';
export type { DataTableTHProps } from './DataTableTH';
export interface DataTableProps<T = any> extends TableHTMLAttributes<HTMLTableElement> {
    fields: DataTableField<T>[];
    data: any[];
    keyField: string | number | ((row: T) => string | number);
    size?: BootstrapSize | '';
    rowClassName?: DataTableClassNames;
    renderRow?: (row: T) => React.ReactNode;
    onSelectRow?: (row: T) => any | void;
    selected?: string | number | ((row: T) => boolean);
    tfoot?: React.ReactElement<HTMLTableSectionElement>;
    children?: ReactNode;
}
declare const DataTable: ({ fields, data, keyField, size, rowClassName, renderRow, onSelectRow, selected, className, tfoot, children, ...rest }: DataTableProps) => JSX.Element;
export default DataTable;
