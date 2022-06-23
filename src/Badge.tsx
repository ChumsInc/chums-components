import React from 'react';
import classNames from "classnames";
import {BootstrapBGColor} from "./types";
import {isLightColor} from "./color-utils";

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'> {
    color: BootstrapBGColor,
    pill?: boolean,
    text?: string,
    className?: string | object,
    colorCode?: string,
    description?: string,
    children?: React.ReactNode
}

const Badge: React.FC<BadgeProps> = ({
                                    color,
                                    pill,
                                    text,
                                    className,
                                    colorCode,
                                    description,
                                    children
                                }) => {
    const isLight = !!colorCode ? isLightColor(colorCode) : null;
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`bg-${color}`]: !!color,
        'text-light': !!colorCode && !isLight,
        'text-dark': !!colorCode && isLight,
    }

    const style: React.CSSProperties = {};
    if (color === 'custom' && !!colorCode) {
        style.backgroundColor = colorCode;
    }

    return (
        <span className={classNames(_className, className)} style={style}>
            {text || children || ''}
            {!!description && (<span className="visually-hidden">{description}</span>)}
        </span>
    )
};

export default React.memo(Badge);
