import React from "react";
import {BootstrapBGColor} from "../types";
import classNames from "classnames";

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'> {
    color: BootstrapBGColor,
    pill?: boolean,
    text?: string,
    className?: string | classNames.Argument,
    colorCode?: string,
    description?: string,
    children?: React.ReactNode
}
