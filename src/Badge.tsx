import React from 'react';
import classNames from "classnames";
import {BootstrapBGColor} from "./types";

export interface BadgeProps {
    color: BootstrapBGColor,
    pill?: boolean,
    text?: string,
    className?: string | object,
    description?: string,
    children?: React.ReactNode
}

const Badge: React.FC<BadgeProps> = ({
                                    color,
                                    pill,
                                    text,
                                    className,
                                    description,
                                    children
                                }) => {
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`bg-${color}`]: !!color,
    }

    return (
        <span className={classNames(_className, className)}>
            {text || children || ''}
            {!!description && (<span className="visually-hidden">{description}</span>)}
        </span>
    )
};

export default React.memo(Badge);
