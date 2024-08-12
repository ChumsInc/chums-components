import {ButtonHTMLAttributes} from "react";
import {BootstrapButtonColor, BootstrapButtonSize} from "../types";

export interface SpinnerButtonProps<T = unknown> extends ButtonHTMLAttributes<T> {
    spinning?: boolean,
    spinnerType?: 'border' | 'grow',
    spinnerAfter?: boolean,
    color?: BootstrapButtonColor,
    size?: BootstrapButtonSize,
}

