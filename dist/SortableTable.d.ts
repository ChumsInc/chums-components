import React, { ReactNode, TableHTMLAttributes } from 'react';
import { BootstrapSize, SortableTableField, SortProps } from "./types";
export interface SortableTableProps<T = any> extends TableHTMLAttributes<HTMLTableElement> {
    fields: SortableTableField<T>[];
    data: any[];
    currentSort: SortProps<T>;
    keyField: string | number | ((row: T) => string | number);
    onChangeSort: (sort: SortProps<T>) => void;
    size?: BootstrapSize;
    rowClassName?: string | object | ((row: T) => string | object);
    onSelectRow?: (row: T) => any | void;
    selected?: string | number | ((row: T) => boolean);
    tfoot?: React.ReactElement<HTMLTableSectionElement>;
    children?: ReactNode;
}
declare const SortableTable: React.FC<SortableTableProps>;
export default SortableTable;
