import React, {ReactNode, TableHTMLAttributes} from 'react';
import {DataTableClassNames, DataTableField} from "./types";
import {noop} from "./utils";
import DataTableRow from "./DataTableRow";


export interface DataTableTBodyProps<T = any> extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField<T>[],
    data: any[],
    keyField: string | number | ((row: T) => string | number),
    rowClassName?: DataTableClassNames;
    renderRow?: (row: T) => React.ReactNode;
    onSelectRow?: (row: T) => any | void,
    selected?: string | number | ((row: T) => boolean),
    children?: ReactNode,
}

const DataTableTBody = ({
                            fields,
                            data,
                            keyField,
                            rowClassName,
                            renderRow,
                            onSelectRow = noop,
                            selected = '',
                            children,
                            ...rest
                        }: DataTableTBodyProps) => {

    return (
        <tbody {...rest}>
        {data.map(row => {
            const keyValue = typeof keyField === "function" ? keyField(row) : row[keyField];
            const isSelected = typeof selected === 'function' ? selected(row) : keyValue === selected;
            if (renderRow) {
                return renderRow(row);
            }
            return (
                <DataTableRow key={keyValue} onClick={() => onSelectRow(row)}
                              rowClassName={rowClassName}
                              fields={fields}
                              row={row} selected={isSelected}/>
            )
        })}
        {children}
        </tbody>
    )
}

export default DataTableTBody;
