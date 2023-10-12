import classNames from "classnames";
import { ReactNode } from "react";
export interface InputGroupProps {
    bsSize?: 'sm' | 'lg';
    className?: string | classNames.Argument;
    children?: ReactNode;
}
