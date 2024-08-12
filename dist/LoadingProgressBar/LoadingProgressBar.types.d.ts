import { ProgressProps } from "../Progress";
import { BootstrapColor } from "../types";
import classNames from "classnames";
import { ReactNode } from "react";
export interface LoadingProgressProps<T = unknown> extends Omit<ProgressProps<T>, 'children'> {
    color?: BootstrapColor;
    value?: number;
    valueMin?: number;
    valueMax?: number;
    striped?: boolean;
    animated?: boolean;
    className?: string | classNames.Argument;
    children?: ReactNode;
}
