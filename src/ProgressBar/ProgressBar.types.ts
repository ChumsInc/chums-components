import {BootstrapColor} from "../types";
import classNames from "classnames";
import {ReactNode} from "react";

export interface ProgressBarProps {
    color?: BootstrapColor,
    value?: number,
    valueMin?: number,
    valueMax?: number,
    striped?: boolean,
    animated?: boolean,
    className?: string | classNames.Argument,
    style?: object,
    children?: ReactNode
}
