import React from 'react';
import classNames from "classnames";
import SortableTableHead from "./SortableTableHead";
import {SortProps} from "./types";
import {noop} from "./utils";
import {DataTableProps} from "./DataTable";
import DataTableTBody from "./DataTableTBody";


export interface SortableTableProps<T = any> extends DataTableProps<T> {
    currentSort: SortProps<T>,
    onChangeSort: (sort: SortProps<T>) => void,
}

const SortableTable = ({
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
                       }: SortableTableProps) => {

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

export default SortableTable;
