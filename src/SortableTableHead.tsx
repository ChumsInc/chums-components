import React, {TableHTMLAttributes} from "react";
import SortableTH from "./SortableTH";
import {SortableTableField, SortProps} from "./types";
import classNames from "classnames";



export interface SortableTableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement>{
    currentSort: SortProps,
    fields: SortableTableField[],
    onChangeSort: (sort:SortProps) => void,
}

const SortableTableHead:React.FC<SortableTableHeadProps> = ({
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
                                )} onClick={onChangeSort} />
                ))}
            </tr>
        </thead>
    )
}
export default SortableTableHead;
