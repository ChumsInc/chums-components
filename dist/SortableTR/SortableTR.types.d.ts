import React, { TableHTMLAttributes } from "react";
import { SortableTableField } from "../types";
import classNames from "classnames";
/**
 * @deprecated - use DataTableRow instead - the table row is the sorted item, not the sortable container
 */
export interface SortableTRProps<T = unknown> extends Omit<TableHTMLAttributes<HTMLTableRowElement>, 'onClick'> {
    rowClassName?: classNames.Argument | ((row: T) => classNames.Argument);
    selected?: boolean;
    fields: SortableTableField<T>[];
    row: T;
    trRef?: React.LegacyRef<HTMLTableRowElement>;
    onClick?: (row?: T) => T | void;
}
