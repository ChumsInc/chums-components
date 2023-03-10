import React, {ReactNode, TableHTMLAttributes} from 'react';
import classNames from "classnames";
import {BootstrapSize, DataTableClassNames, DataTableField} from "./types";
import {noop} from "./utils";
import DataTableHead from "./DataTableHead";
import DataTableTBody from "./DataTableTBody";

export {default as DataTableRow} from './DataTableRow';
export {default as DataTableTH} from './DataTableTH';
export {DataTableHead, DataTableTBody};

export type {DataTableHeadProps} from './DataTableHead'
export type {DataTableRowProps} from './DataTableRow';
export type {DataTableTBodyProps} from './DataTableTBody'
export type {DataTableTHProps} from './DataTableTH';


export interface DataTableProps<T = any> extends TableHTMLAttributes<HTMLTableElement> {
    fields: DataTableField<T>[],
    data: any[],
    keyField: string | number | ((row: T) => string | number),
    size?: BootstrapSize | '',
    rowClassName?: DataTableClassNames;
    onSelectRow?: (row: T) => any | void,
    selected?: string | number | ((row: T) => boolean),
    tfoot?: React.ReactElement<HTMLTableSectionElement>,
    children?: ReactNode,
}

const DataTable = ({
                       fields,
                       data,
                       keyField,
                       size = '',
                       rowClassName,
                       onSelectRow = noop,
                       selected = '',
                       className = '',
                       tfoot,
                       children,
                       ...rest
                   }: DataTableProps) => {

    const tableClassName = classNames('table', className, {
        [`table-${size}`]: !!size,
    })

    return (
        <table className={tableClassName} {...rest}>
            <DataTableHead fields={fields}/>
            {!!data.length && (
                <DataTableTBody fields={fields} data={data} keyField={keyField} rowClassName={rowClassName}
                                onSelectRow={onSelectRow} selected={selected}/>
            )}
            {children}
            {tfoot}
        </table>
    )
}

export default DataTable;
