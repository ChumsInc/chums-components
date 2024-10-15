import React from "react";
import classNames from "classnames";
import {FormColumnProps} from "./FormColumn.types";

const FormColumn = ({
                        label,
                        labelProps,
                        width = 8,
                        className,
                        align = 'baseline',
                        children
                    }: FormColumnProps) => {
    const parentClassName = {
        [`align-items-${align}`]: !className?.includes('align-items') && !!align,
    }
    const labelClassName = {
        [`col-${12 - width}`]: !!width,
        'col-auto': !width,
        'form-label': true,
    }
    const containerClassName = {
        [`col-${width}`]: !!width,
        'col': !width,

    }
    return (
        <div className={classNames('row g-3', parentClassName, className)}>
            <label {...labelProps} className={classNames(labelClassName)}>{label}</label>
            <div className={classNames(containerClassName)}>
                {children}
            </div>
        </div>
    )
}

export default FormColumn;
