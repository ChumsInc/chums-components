import React, {TableHTMLAttributes} from 'react';
import classNames from "classnames";
import {noop} from "./utils";
import {DataTableField} from "./types";

export interface DataTableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
    rowClassName?: string | classNames.ArgumentArray | ((row: unknown) => string | classNames.ArgumentArray),
    selected?: boolean,
    fields: DataTableField[],
    row: any,
    trRef?: React.Ref<HTMLTableRowElement>,
    onClick?: (row?: unknown) => any|void,
}

const DataTableRow = ({
                          className,
                          rowClassName,
                          selected,
                          fields,
                          row,
                          trRef,
                          onClick = noop,
                          ...rest
                      }: DataTableRowProps) => {
    const clickHandler = () => {
        return onClick ? onClick() : noop();
    }

    const _className = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;

    return (
        <tr ref={trRef} className={classNames({'table-active': selected}, className, _className)}
            onClick={clickHandler} {...rest}>
            {fields.map((field, index) => {
                const fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
                if (typeof field.render === 'function') {
                    return (
                        <td key={index} className={classNames({[`text-${field.align}`]: !!field.align}, fieldClassName)}
                            colSpan={field.colSpan}>{field.render(row)}</td>
                    );
                }
                return (<td key={index} className={classNames({[`text-${field.align}`]: !!field.align}, fieldClassName)}
                            colSpan={field.colSpan}>{row[field.field]}</td>);
            })}
        </tr>
    )
}

export default DataTableRow;
