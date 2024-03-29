import { ButtonHTMLAttributes } from "react";
import { BootstrapButtonColor, BootstrapButtonSize } from "../types";
export interface SpinnerButtonProps extends ButtonHTMLAttributes<any> {
    spinning?: boolean;
    spinnerType?: 'border' | 'grow';
    spinnerAfter?: boolean;
    color?: BootstrapButtonColor;
    size?: BootstrapButtonSize;
}
