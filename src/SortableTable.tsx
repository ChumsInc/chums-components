import React, {ReactNode, TableHTMLAttributes} from 'react';
import classNames from "classnames";
import SortableTableHead from "./SortableTableHead";
import SortableTR from "./SortableTR";
import {BootstrapSize, SortableTableField, SortProps} from "./types";
import {noop} from "./utils";


export interface SortableTableProps<T = any> extends TableHTMLAttributes<HTMLTableElement> {
    fields: SortableTableField<T>[],
    data: any[],
    currentSort: SortProps<T>,
    keyField: string | number | ((row: T) => string | number),
    onChangeSort: (sort: SortProps<T>) => void,
    size?: BootstrapSize,
    rowClassName?: string | object | ((row: T) => string | object),
    onSelectRow?: (row: T) => any | void,
    selected?: string | number | ((row: T) => boolean),
    tfoot?: React.ReactElement<HTMLTableSectionElement>,
    children?: ReactNode,
}

const SortableTable: React.FC<SortableTableProps> = ({
                                                         fields,
                                                         data,
                                                         currentSort,
                                                         onChangeSort,
                                                         keyField,
                                                         size = '',
                                                         rowClassName,
                                                         onSelectRow = noop,
                                                         selected = '',
                                                         className = '',
                                                         tfoot,
                                                         children,
                                                         ...rest
                                                     }) => {

    const tableClassName = classNames('table', className, {
        [`table-${size}`]: !!size,
    })

    return (
        <table className={tableClassName} {...rest}>
            <SortableTableHead currentSort={currentSort} fields={fields} onChangeSort={onChangeSort}/>
            {!!data.length && (
                <tbody>
                {data.map(row => {
                    const keyValue = typeof keyField === "function" ? keyField(row) : row[keyField];
                    const isSelected = typeof selected === 'function' ? selected(row) : keyValue === selected;
                    return (
                        <SortableTR key={keyValue} onClick={() => onSelectRow(row)} rowClassName={rowClassName}
                                    fields={fields}
                                    row={row} selected={isSelected}/>
                    )
                })}
                </tbody>
            )}
            {children}
            {tfoot}
        </table>
    )
}

export default SortableTable;
