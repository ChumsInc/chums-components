import classNames from "classnames";
import { ReactNode } from "react";
export interface ProgressProps {
    height?: string;
    style?: any;
    className?: string | classNames.ArgumentArray;
    children: ReactNode;
}
