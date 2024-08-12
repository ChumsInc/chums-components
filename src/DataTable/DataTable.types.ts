import React, {ReactNode, TableHTMLAttributes} from "react";
import {BootstrapSize, DataTableClassNames, DataTableField} from "../types";

export interface DataTableProps<T = unknown> extends TableHTMLAttributes<HTMLTableElement> {
    fields: DataTableField<T>[],
    data: any[],
    keyField: string | number | ((row: T) => string | number),
    size?: BootstrapSize | '',
    rowClassName?: DataTableClassNames;
    renderRow?: (row: T) => React.ReactNode;
    onSelectRow?: (row: T) => T | void,
    selected?: string | number | ((row: T) => boolean),
    tfoot?: React.ReactElement<HTMLTableSectionElement>,
    children?: ReactNode,
}
