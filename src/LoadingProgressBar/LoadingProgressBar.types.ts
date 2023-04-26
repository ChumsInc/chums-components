import {ProgressProps} from "../Progress";
import {BootstrapColor} from "../types";
import classNames from "classnames";
import {ReactNode} from "react";

export interface LoadingProgressProps extends Omit<ProgressProps, 'children'> {
    color?: BootstrapColor,
    value?: number,
    valueMin?: number,
    valueMax?: number,
    striped?: boolean,
    animated?: boolean,
    className?: string | classNames.ArgumentArray,
    children?: ReactNode
}

