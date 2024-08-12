import React, {TableHTMLAttributes} from "react";
import classNames from "classnames";
import {DataTableField} from "../types";

export interface DataTableRowProps<T = unknown> extends Omit <TableHTMLAttributes<HTMLTableRowElement>, 'onClick'> {
    rowClassName?: string | classNames.Argument | ((row: T) => string | classNames.Argument),
    selected?: boolean,
    fields: DataTableField<T>[],
    row: T,
    trRef?: React.Ref<HTMLTableRowElement>,
    onClick?: (row?: T) => T | void,
}

