import React, {ChangeEvent, useId} from "react";
import {BootstrapButtonColor, BootstrapButtonSize} from "./types";
import classNames from "classnames";

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

const ToggleButton: React.FC<ToggleButtonProps> = ({
                                                       id,
                                                       type = 'checkbox',
                                                       checked,
                                                       color = 'primary',
                                                       size,
                                                       className,
                                                       onChange,
                                                       disabled,
                                                       children,
                                                   }) => {
    const buttonId = id ?? useId()
    const btnClassName = classNames(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-outline-${color}`]: !!color && !checked,
        [`btn-${color}`]: !!color && checked,
    });

    return (
        <>
            <input type={type} className="btn-check" id={buttonId} autoComplete="off"
                   onChange={onChange} checked={checked} disabled={disabled}/>
            <label htmlFor={id} className={btnClassName}>{children}</label>
        </>
    );
}

export default ToggleButton;
