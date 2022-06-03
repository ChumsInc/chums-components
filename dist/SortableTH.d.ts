import React from "react";
import { SortableTableField, SortProps } from "./types";
export interface SortableTHProps {
    field: SortableTableField;
    sorted?: boolean;
    ascending?: boolean;
    className?: string | object;
    onClick: (sort: SortProps) => void;
}
declare const SortableTH: React.FC<SortableTHProps>;
export default SortableTH;
