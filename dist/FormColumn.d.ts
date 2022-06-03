import React, { ReactNode } from "react";
import { BootstrapFlexAlign } from "./types";
export interface FormColumnProps {
    label: string | ReactNode;
    width?: number;
    className?: string;
    align?: BootstrapFlexAlign;
    children?: ReactNode;
}
declare const FormColumn: React.FC<FormColumnProps>;
export default FormColumn;
