import React from 'react';
import {noop} from "../utils/utils";
import DataTableRow from "../DataTableRow/DataTableRow";
import {DataTableTBodyProps} from "./DataTableTBody.types";


export default function DataTableTBody<T = unknown>({
                            fields,
                            data,
                            keyField,
                            rowClassName,
                            renderRow,
                            onSelectRow = noop,
                            selected = '',
                            children,
                            ...rest
                        }: DataTableTBodyProps<T>) {

    return (
        <tbody {...rest}>
        {data.map(row => {
            const keyValue = String(typeof keyField === "function" ? keyField(row) : row[keyField]);
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
