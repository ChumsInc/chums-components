import React, { TableHTMLAttributes } from "react";
import { SortableTableField, SortProps } from "./types";
export interface SortableTableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
    currentSort: SortProps;
    fields: SortableTableField[];
    onChangeSort: (sort: SortProps) => void;
}
declare const SortableTableHead: React.FC<SortableTableHeadProps>;
export default SortableTableHead;
