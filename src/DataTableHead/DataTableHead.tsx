import React from "react";
import DataTableTH from "../DataTableTH/DataTableTH";
import classNames from "classnames";
import {DataTableHeadProps} from "./DataTableHead.types";


export default function DataTableHead<T=unknown>({fields, ...rest}: DataTableHeadProps<T>) {
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

