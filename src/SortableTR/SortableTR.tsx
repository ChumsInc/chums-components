import React, {useEffect} from 'react';
import classNames from "classnames";
import {noop} from "../utils/utils";
import {SortableTRProps} from "./SortableTR.types";


/**
 * @deprecated - use DataTableRow instead - the table row is the sorted item, not the sortable container
 */
const SortableTR = ({
                        className,
                        rowClassName,
                        selected,
                        fields,
                        row,
                        trRef,
                        onClick = noop,
                        ...rest
                    }: SortableTRProps) => {
    useEffect(() => {
        console.log('Deprecation Notice: SortableTR is deprecated, use DataTableRow instead.');
    }, []);

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
                            colSpan={field.colSpan}>{row?.[field.field]}</td>);
            })}
        </tr>
    )
}

export default SortableTR;
