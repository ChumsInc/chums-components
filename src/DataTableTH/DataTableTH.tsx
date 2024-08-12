import React from "react";
import classNames from "classnames";
import {DataTableTHProps} from "./DataTableTH.types";


export default function DataTableTH<T = unknown>({
                                                     field,
                                                     className,
                                                 }: DataTableTHProps<T>) {
    const thClassName = classNames({[`text-${field.align}`]: !!field.align}, className);

    return (<th className={thClassName}>{field.title}</th>)
}
