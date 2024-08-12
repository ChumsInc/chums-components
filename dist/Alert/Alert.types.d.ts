import React from "react";
import { ArgumentArray } from "classnames";
import { BootstrapColor } from "../types";
export interface AlertProps extends BasicAlert {
    count?: number;
    onDismiss?: (args?: unknown) => void;
    children?: React.ReactNode;
}
export interface BasicAlert {
    title?: string;
    message?: string;
    context?: string;
    color?: BootstrapColor;
    className?: string | ArgumentArray;
    canDismiss?: boolean;
}
export interface ErrorAlert {
    id: number;
    context: string;
    message: string;
    count: number;
    color?: BootstrapColor;
}
