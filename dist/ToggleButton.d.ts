import React, { ChangeEvent } from "react";
import { BootstrapButtonColor, BootstrapButtonSize } from "./types";
export interface ToggleButtonProps {
    id?: string;
    type?: 'checkbox' | 'radio';
    checked: boolean;
    color?: BootstrapButtonColor;
    size?: BootstrapButtonSize;
    className?: string;
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const ToggleButton: React.FC<ToggleButtonProps>;
export default ToggleButton;
