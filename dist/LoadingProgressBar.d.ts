import React, { ReactNode } from "react";
import { ProgressProps } from "./Progress";
import { BootstrapColor } from "./types";
import classNames from "classnames";
export interface LoadingProgressProps extends ProgressProps {
    color?: BootstrapColor;
    value?: number;
    valueMin?: number;
    valueMax?: number;
    striped?: boolean;
    animated?: boolean;
    className?: string | classNames.ArgumentArray;
    children?: ReactNode;
}
declare const LoadingProgress: React.FC<LoadingProgressProps>;
export default LoadingProgress;
