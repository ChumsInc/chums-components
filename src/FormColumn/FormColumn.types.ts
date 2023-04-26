import {ReactNode} from "react";
import {BootstrapFlexAlign} from "../types";

export interface FormColumnProps {
    label: string|ReactNode,
    width?: number,
    className?: string,
    align?: BootstrapFlexAlign,
    children?: ReactNode
}

