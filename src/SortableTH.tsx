import React from "react";
import classNames from "classnames";
import {SortableTableField, SortProps} from "./types";
import DataTableTH, {DataTableTHProps} from "./DataTableTH";


export interface SortableTHProps extends DataTableTHProps {
    field: SortableTableField,
    sorted?: boolean,
    ascending?: boolean,
    onClick: (sort: SortProps) => void,
}

const SortableTH: React.FC<SortableTHProps> = ({
                                                   field,
                                                   sorted,
                                                   ascending,
                                                   className,
                                                   onClick
                                               }) => {
    if (!field.sortable) {
        return (<DataTableTH field={field}/>)
    }

    const thClassName = classNames({[`text-${field.align}`]: !!field.align}, className);

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
