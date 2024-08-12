import classNames from "classnames";
import {ReactNode} from "react";

export interface ProgressProps {
    height?: string,
    style?: unknown,
    className?: string | classNames.Argument,
    children: ReactNode,
}

