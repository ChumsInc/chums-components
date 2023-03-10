import React, {TableHTMLAttributes} from "react";
import DataTableTH from "./DataTableTH";
import {DataTableField} from "./types";
import classNames from "classnames";


export interface DataTableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
    fields: DataTableField[];
}

const DataTableHead = ({
                           fields,
                           ...rest
                       }: DataTableHeadProps) => {
    return (
        <thead {...rest}>
        <tr>
            {fields.map((tableField, index) => (
                <DataTableTH key={index} field={tableField}
                             className={classNames(
                            typeof tableField.className === 'function'
                                ? {[`text-${tableField.align}`]: !!tableField.align}
                                : tableField.className
                        )}/>
            ))}
        </tr>
        </thead>
    )
}
export default DataTableHead;
