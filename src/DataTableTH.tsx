import React from "react";
import classNames from "classnames";
import {DataTableField} from "./types";


export interface DataTableTHProps {
    field: DataTableField,
    className?: string | classNames.ArgumentArray,
}

const DataTableTH = ({
                    field,
                    className,
                }: DataTableTHProps) => {
    const thClassName = classNames({[`text-${field.align}`]: !!field.align}, className);

    return (<th className={thClassName}>{field.title}</th>)
}

export default DataTableTH;
