import { LabelHTMLAttributes, ReactNode } from "react";
import { BootstrapFlexAlign } from "../types";
export interface FormColumnProps {
    label: string | ReactNode;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
    width?: number;
    className?: string;
    align?: BootstrapFlexAlign;
    children?: ReactNode;
}
