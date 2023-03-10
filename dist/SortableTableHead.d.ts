import React from "react";
import { SortableTableField, SortProps } from "./types";
import { DataTableHeadProps } from "./DataTableHead";
export interface SortableTableHeadProps extends DataTableHeadProps {
    currentSort: SortProps;
    fields: SortableTableField[];
    onChangeSort: (sort: SortProps) => void;
}
declare const SortableTableHead: React.FC<SortableTableHeadProps>;
export default SortableTableHead;
