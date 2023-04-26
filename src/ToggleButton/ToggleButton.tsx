import React, {useId} from "react";
import classNames from "classnames";
import {ToggleButtonProps} from "./ToggleButton.types";

const ToggleButton = ({
                          id,
                          type = 'checkbox',
                          checked,
                          color = 'primary',
                          size,
                          className,
                          onChange,
                          disabled,
                          children,
                      }: ToggleButtonProps) => {
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
            <label htmlFor={buttonId} className={btnClassName}>{children}</label>
        </>
    );
}

export default ToggleButton;
