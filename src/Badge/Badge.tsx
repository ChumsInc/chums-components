import React from 'react';
import classNames from "classnames";
import {BadgeProps} from "./Badge.types";
import {isLightColor} from "../utils/utils";


const Badge = ({
                   color,
                   pill,
                   text,
                   className,
                   colorCode,
                   description,
                   children
               }: BadgeProps) => {
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`text-bg-${color}`]: !!color,
    }

    const style: React.CSSProperties = {};
    if (color === 'custom' && !!colorCode) {
        style.backgroundColor = colorCode;
        if (isLightColor(colorCode)) {
            style.color = 'black';
        }
    }

    return (
        <span className={classNames(_className, className)} style={style}>
            {text || children || ''}
            {!!description && (<span className="visually-hidden">{description}</span>)}
        </span>
    )
};

export default Badge
