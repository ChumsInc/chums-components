import React, {ReactNode} from 'react';
import classNames from "classnames";
import {noop} from "../utils/utils";
import {DataTableRowProps} from "./DataTableRow.types";


export default function DataTableRow<T = unknown>({
                                                      className,
                                                      rowClassName,
                                                      selected,
                                                      fields,
                                                      row,
                                                      trRef,
                                                      onClick = noop,
                                                      ...rest
                                                  }: DataTableRowProps<T>) {
    const clickHandler = () => {
        return onClick ? onClick() : noop();
    }

    const _className = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;
    if (!row) {
        return null;
    }

    return (
        <tr ref={trRef} className={classNames({'table-active': selected}, className, _className)}
            onClick={clickHandler} {...rest}>
            {fields.map((field, index) => {
                const fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
                if (typeof field.render === 'function') {
                    return (
                        <td key={index} className={classNames({[`text-${field.align}`]: !!field.align}, fieldClassName)}
                            colSpan={field.colSpan}>
                            {field.render(row)}
                        </td>
                    );
                }
                if (row[field.field] === undefined) {
                    return <td key={index}></td>;
                }

                return (
                    <td key={index} className={classNames({[`text-${field.align}`]: !!field.align}, fieldClassName)}
                        colSpan={field.colSpan}>
                        {row[field.field] as ReactNode}
                    </td>
                );
            })}
        </tr>
    )
}
