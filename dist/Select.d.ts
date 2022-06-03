import React, { ReactNode, SelectHTMLAttributes } from "react";
import { BootstrapSize } from "./types";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    bsSize?: BootstrapSize;
    children?: ReactNode;
}
declare const Select: React.FC<SelectProps>;
export default Select;
