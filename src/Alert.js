import React, {Component} from "react";
import classNames from "classnames";
import Badge from "./Badge";
import numeral from 'numeral';
import {propTypeAlert} from "./commonPropTypes";

export default class Alert extends Component {
    static propTypes = {
        ...propTypeAlert,
    }
    static defaultProps = {
        id: 0,
        type: "info",
        title: 'Alert',
        context: null,
        count: 0,
        canDismiss: false,
    }

    render() {
        const {id, type, className, title, message, children, context, count, canDismiss, onDismiss} = this.props;
        const elClassName = {
            'alert-dismissible': canDismiss,
        }
        return (
            <div className={classNames('alert my-3', `alert-${type}`, className, elClassName)}>
                {!!context && (<strong className="me-1">[{context}]</strong>)}
                {title && (<strong className="me-1">{title}:</strong>)}
                {message || children || null}
                {!!count && (<Badge type={type} className="mx-3">{numeral(count).format('0,0')}</Badge>)}
                {canDismiss && <span onClick={() => onDismiss(id)} className="btn-close" />}
            </div>
        );
    }
}
