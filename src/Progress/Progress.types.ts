import classNames from "classnames";
import {ReactNode} from "react";

export interface ProgressProps {
    height?: string,
    style?: any,
    className?: string | classNames.Argument,
    children: ReactNode,
}

