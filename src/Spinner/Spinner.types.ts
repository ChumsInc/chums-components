import {HTMLAttributes} from "react";
import {BootstrapColor} from "../types";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'border' | 'grow',
    bsSize?: 'sm',
    hiddenLabel?: string,
    color?: BootstrapColor,
}
