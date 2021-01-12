import React from "react";
import classNames from "classnames";
import Badge from "./Badge";
import {ColorType} from "./commonProps";
import numeral from 'numeral';

export interface AlertProps {
    id: number,
    type: ColorType,
    title?: string,
    message?: string,
    context?: string,
    count: number,
    canDismiss: boolean,
    children?: React.ReactChild | React.ReactChildren,
    onDismiss: (id:number) => void,
}

export default class Alert extends React.Component<AlertProps> {
    static defaultProps = {
        id: 0,
        type: "info",
        title: 'Alert',
        context: null,
        count: 0,
        canDismiss: false,
    }

    render() {
        const {id, type, title, message, children, context, count, canDismiss, onDismiss} = this.props;
        const className = {
            'alert-dismissible': canDismiss,
        }
        return (
            <div className={classNames('alert my-3', `alert-${type}`, className)}>
                {!!context && (<strong className="me-1">[{context}]</strong>)}
                <strong className="me-1">{title || 'Alert'}</strong>
                {message || children || null}
                {!!count && (<Badge type={type}>{numeral(count).format('0,0')}</Badge>)}
                {canDismiss && <span onClick={() => onDismiss(id)}className="btn-close" />}
            </div>
        );
    }
}
