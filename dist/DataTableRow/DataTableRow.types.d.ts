import React, { TableHTMLAttributes } from "react";
import classNames from "classnames";
import { DataTableField } from "../types";
export interface DataTableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
    rowClassName?: string | classNames.ArgumentArray | ((row: unknown) => string | classNames.ArgumentArray);
    selected?: boolean;
    fields: DataTableField[];
    row: any;
    trRef?: React.Ref<HTMLTableRowElement>;
    onClick?: (row?: unknown) => any | void;
}
