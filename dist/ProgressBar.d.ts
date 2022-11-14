import React, { ReactNode } from 'react';
import { BootstrapColor } from "./types";
import classNames from "classnames";
export interface ProgressBarProps {
    color?: BootstrapColor;
    value?: number;
    valueMin?: number;
    valueMax?: number;
    striped?: boolean;
    animated?: boolean;
    className?: string | classNames.ArgumentArray;
    style?: object;
    children?: ReactNode;
}
declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
