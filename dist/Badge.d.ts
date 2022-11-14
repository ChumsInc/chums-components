import React from 'react';
import classNames from "classnames";
import { BootstrapBGColor } from "./types";
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'> {
    color: BootstrapBGColor;
    pill?: boolean;
    text?: string;
    className?: string | classNames.ArgumentArray;
    colorCode?: string;
    description?: string;
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<BadgeProps>;
export default _default;
