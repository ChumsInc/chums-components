import React from 'react';
import classNames from 'classnames';
import {ColorType} from "./commonProps";

export interface BadgeProps {
    type?: ColorType
    text: string,
    backgroundColor?: string,
    className?: string | object,
    description?: string,
    children: React.ReactChild | React.ReactChildren,
}

export default class Badge extends React.Component<BadgeProps> {
    static defaultProps = {
        type: 'primary',
        text: null,
        className: '',
    }

    render() {
        const {type, text, className, children, description} = this.props;
        const styleClassName = `bg-${type}`;

        const badgeClassNames = classNames('badge badge-pill', styleClassName, className);
        return (
            <span className={badgeClassNames}>
                {text || children || ''}
                {!!description && (<span className="visually-hidden">{description}</span>)}
            </span>
        )
    }
}


