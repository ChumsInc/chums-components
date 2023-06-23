import React, { TableHTMLAttributes } from "react";
import classNames from "classnames";
import { DataTableField } from "../types";
export interface DataTableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
    rowClassName?: string | classNames.Argument | ((row: unknown) => string | classNames.Argument);
    selected?: boolean;
    fields: DataTableField[];
    row: any;
    trRef?: React.Ref<HTMLTableRowElement>;
    onClick?: (row?: unknown) => any | void;
}
