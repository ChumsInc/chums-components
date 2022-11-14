import React from "react";
import classNames from "classnames";
import {SortableTableField, SortProps} from "./types";


export interface SortableTHProps {
    field: SortableTableField,
    sorted?: boolean,
    ascending?: boolean,
    className?: string|classNames.ArgumentArray,
    onClick: (sort:SortProps) => void,
}

const SortableTH: React.FC<SortableTHProps> = ({
                                                   field,
                                                   sorted,
                                                   ascending,
                                                   className,
                                                   onClick
                                               }) => {
    const thClassName = classNames({[`text-${field.align}`]: !!field.align}, className);

    if (!field.sortable) {
        return (<th className={thClassName}>{field.title}</th>)
    }
    const clickHandler = () => {
        onClick({field: field.field, ascending: !sorted ? true : !ascending});
    }
    const iconClassName = {
        'bi-arrow-down': !!sorted && !!ascending,
        'bi-arrow-up': !!sorted && !ascending,
    }


    return (
        <th className={classNames("sortable", thClassName)} onClick={clickHandler}>
            {!!sorted && (
                <span className={classNames('me-1', iconClassName)}/>
            )}
            {field.title}
        </th>
    )
}

export default SortableTH;
