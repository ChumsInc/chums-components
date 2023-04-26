import React from 'react';
import classNames from "classnames";
import {SpinnerProps} from "./Spinner.types";


const Spinner = ({
                     type,
                     bsSize,
                     role = 'status',
                     hiddenLabel,
                     color,
                     className,
                     ...rest
                 }: SpinnerProps) => {

    const spinnerClassName = {
        'spinner-border': type === 'border',
        'spinner-grow': type === 'grow',
        [`spinner-border-${bsSize}`]: !!bsSize,
        [`text-${color}`]: !!color,
    }
    return (
        <div className={classNames(spinnerClassName, className)} role={role} {...rest}>
            {!!hiddenLabel && (<span className="visually-hidden">{hiddenLabel}</span>)}
        </div>
    )
}

export default Spinner;
