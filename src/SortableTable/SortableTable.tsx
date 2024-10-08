import React from 'react';
import classNames from "classnames";
import SortableTableHead from "../SortableTableHead";
import {noop} from "../utils/utils";
import DataTableTBody from "../DataTableTBody";
import {SortableTableProps} from "./SortableTable.types";


export default function SortableTable<T = unknown>({
                                                       fields,
                                                       data,
                                                       currentSort,
                                                       onChangeSort,
                                                       keyField,
                                                       size = '',
                                                       rowClassName,
                                                       renderRow,
                                                       onSelectRow = noop,
                                                       selected = '',
                                                       className = '',
                                                       tfoot,
                                                       children,
                                                       ...rest
                                                   }: SortableTableProps<T>) {
    const tableClassName = classNames('table', className, {
        [`table-${size}`]: !!size,
    })

    return (
        <table className={tableClassName} {...rest}>
            <SortableTableHead currentSort={currentSort} fields={fields} onChangeSort={onChangeSort}/>
            {!!data.length && (
                <DataTableTBody fields={fields} data={data} keyField={keyField} rowClassName={rowClassName}
                                renderRow={renderRow}
                                onSelectRow={onSelectRow} selected={selected}/>
            )}
            {children}
            {tfoot}
        </table>
    )
}
