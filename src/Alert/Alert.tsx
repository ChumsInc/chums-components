import React from "react";
import classNames from 'classnames';
import Badge from "../Badge/Badge";
import {commaFormatter} from "../utils/utils";
import {AlertProps} from "./Alert.types";


const Alert = ({
                   message,
                   color = 'primary',
                   title,
                   className = '',
                   context,
                   count = 0,
                   canDismiss,
                   onDismiss,
                   children
               }: AlertProps) => {
    if (typeof onDismiss === 'function') {
        canDismiss = true;
    }
    if (process.env.NODE_ENV !== 'production' && canDismiss && !onDismiss) {
        console.warn('Alert component is missing onDismiss handler with canDismiss=true.', alert);
    }

    const elClassName = {
        [`alert-${color}`]: !!color,
        'alert-dismissible': canDismiss,
    }

    return (
        <div className={classNames('alert my-3', elClassName, className)}>
            {!!context && (<strong className="me-1">[{context}]</strong>)}
            {!!title && (<strong className="me-1">{title}:</strong>)}
            {message || children || null}
            {!!count && count > 1 && (
                <Badge color={color} className="mx-3">{commaFormatter(count)}</Badge>
            )}
            {canDismiss && typeof onDismiss === 'function' && (
                <button type="button" aria-label="close" onClick={onDismiss} className="btn-close"/>
            )}
        </div>
    )
}

export default Alert;
