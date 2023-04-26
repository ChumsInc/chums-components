import { ReactNode, SelectHTMLAttributes } from "react";
import { BootstrapSize } from "../types";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    bsSize?: BootstrapSize;
    children?: ReactNode;
}
