import {BootstrapButtonColor, BootstrapButtonSize} from "../types";
import React, {ChangeEvent} from "react";

export interface ToggleButtonProps {
    id?: string,
    type?: 'checkbox' | 'radio',
    checked: boolean,
    color?: BootstrapButtonColor,
    size?: BootstrapButtonSize,
    className?: string,
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean;
    children?: React.ReactNode;
}

