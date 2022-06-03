import React from "react";
import classNames from "classnames";
import {SortableTableField, SortProps} from "./types";


export interface SortableTHProps {
    field: SortableTableField,
    sorted?: boolean,
    ascending?: boolean,
    className?: string|object,
    onClick: (sort:SortProps) => void,
}

const SortableTH: React.FC<SortableTHProps> = ({
                                                   field,
                                                   sorted,
                                                   ascending,
                                                   className,
                                                   onClick
                                               }) => {
    if (!field.sortable) {
        return (<th className={classNames(className)}>{field.title}</th>)
    }
    const iconClassName = {
        'bi-sort-down': !!sorted && !!ascending,
        'bi-sort-up': !!sorted && !ascending,
    }
    const clickHandler = () => {
        onClick({field: field.field, ascending: !sorted ? true : !ascending});
    }

    return (
        <th className={classNames("sortable", className)} onClick={clickHandler}>
            {field.title}
            {!!sorted && (
                <span className={classNames('ms-1', iconClassName)}/>
            )}
        </th>
    )
}

export default SortableTH;
