import React from "react";
import classNames from "classnames";
import { SortableTableField, SortProps } from "./types";
export interface SortableTHProps {
    field: SortableTableField;
    sorted?: boolean;
    ascending?: boolean;
    className?: string | classNames.ArgumentArray;
    onClick: (sort: SortProps) => void;
}
declare const SortableTH: React.FC<SortableTHProps>;
export default SortableTH;
