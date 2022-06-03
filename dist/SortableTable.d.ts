import React, { ReactNode, TableHTMLAttributes } from 'react';
import { BootstrapSize, SortableTableField, SortProps } from "./types";
export interface SortableTableProps extends TableHTMLAttributes<HTMLTableElement> {
    fields: SortableTableField[];
    data: any[];
    currentSort: SortProps;
    keyField: string | number | ((any: any) => string | number);
    onChangeSort: (sort: SortProps) => void;
    size?: BootstrapSize;
    rowClassName?: string | object | ((any: any) => string | object);
    onSelectRow?: (any: any) => any | void;
    selected?: string | number | ((any: any) => boolean);
    tfoot?: React.ReactElement<HTMLTableSectionElement>;
    children?: ReactNode;
}
declare const SortableTable: React.FC<SortableTableProps>;
export default SortableTable;
