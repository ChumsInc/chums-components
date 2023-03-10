import React from "react";
import SortableTH from "./SortableTH";
import {SortableTableField, SortProps} from "./types";
import classNames from "classnames";
import {DataTableHeadProps} from "./DataTableHead";


export interface SortableTableHeadProps extends DataTableHeadProps {
    currentSort: SortProps,
    fields: SortableTableField[],
    onChangeSort: (sort: SortProps) => void,
}

const SortableTableHead: React.FC<SortableTableHeadProps> = ({
                                                                 currentSort,
                                                                 fields,
                                                                 onChangeSort,
                                                             }) => {
    const {field, ascending} = currentSort;
    return (
        <thead>
        <tr>
            {fields.map((tableField, index) => (
                <SortableTH key={index} field={tableField}
                            sorted={field === tableField.field} ascending={ascending}
                            className={classNames(
                                typeof tableField.className === 'function'
                                    ? {[`text-${tableField.align}`]: !!tableField.align}
                                    : tableField.className
                            )} onClick={onChangeSort}/>
            ))}
        </tr>
        </thead>
    )
}
export default SortableTableHead;
