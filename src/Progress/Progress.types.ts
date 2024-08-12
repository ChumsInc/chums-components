import classNames from "classnames";
import {HTMLAttributes, ReactNode} from "react";

export interface ProgressProps<T = unknown> extends Omit<HTMLAttributes<T>, 'className'>{
    height?: string,
    className?: string | classNames.Argument,
    children: ReactNode,
}

