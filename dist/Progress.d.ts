import React, { ReactNode } from 'react';
import classNames from "classnames";
export interface ProgressProps {
    height?: string;
    style?: any;
    className?: string | classNames.ArgumentArray;
    children?: ReactNode;
}
declare const Progress: React.FC<ProgressProps>;
export default Progress;
