import React from "react";
import { BasicAlert } from "./types";
export interface AlertProps extends BasicAlert {
    count?: number;
    onDismiss?: (args?: any) => void;
    children?: React.ReactNode;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
