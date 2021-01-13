import React, {Component} from "react";
import classNames from "classnames";
import Badge from "./Badge";
import numeral from 'numeral';
import {colorPropType} from "./commonPropTypes";
import PropTypes from "prop-types";
import {colors} from './colors';

export default class Alert extends Component {
    static propTypes = {
        id: PropTypes.number,
        color: PropTypes.oneOf([...colorPropType]),
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        title: PropTypes.string,
        message: PropTypes.string,
        context: PropTypes.string,
        count: PropTypes.number,
        canDismiss: PropTypes.bool,
        onDismiss: PropTypes.func,
    }
    static defaultProps = {
        id: 0,
        color: colors.info,
        title: 'Alert',
        context: null,
        count: 0,
        canDismiss: false,
    }

    render() {
        const {id, color, className, title, message, children, context, count, canDismiss, onDismiss} = this.props;
        const elClassName = {
            'alert-dismissible': canDismiss,
        }
        return (
            <div className={classNames('alert my-3', `alert-${color}`, className, elClassName)}>
                {!!context && (<strong className="me-1">[{context}]</strong>)}
                {title && (<strong className="me-1">{title}:</strong>)}
                {message || children || null}
                {!!count && (<Badge type={color} className="mx-3">{numeral(count).format('0,0')}</Badge>)}
                {canDismiss && <span onClick={() => onDismiss(id)} className="btn-close"/>}
            </div>
        );
    }
}
