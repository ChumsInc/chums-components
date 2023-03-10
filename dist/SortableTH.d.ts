import React from "react";
import { SortableTableField, SortProps } from "./types";
import { DataTableTHProps } from "./DataTableTH";
export interface SortableTHProps extends DataTableTHProps {
    field: SortableTableField;
    sorted?: boolean;
    ascending?: boolean;
    onClick: (sort: SortProps) => void;
}
declare const SortableTH: React.FC<SortableTHProps>;
export default SortableTH;
