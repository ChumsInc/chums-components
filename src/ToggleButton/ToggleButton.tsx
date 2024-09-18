import React, {ForwardedRef, useId} from "react";
import classNames from "classnames";
import {ToggleButtonProps} from "./ToggleButton.types";

export default React.forwardRef(function ToggleButton({
                          id,
                          type = 'checkbox',
                          checked,
                          color = 'primary',
                          size,
                          className,
                          onChange,
                          disabled,
                          children,
                      }: ToggleButtonProps, ref:ForwardedRef<HTMLInputElement>) {
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
                   ref={ref}
                   onChange={onChange} checked={checked} disabled={disabled}/>
            <label htmlFor={buttonId} className={btnClassName}>{children}</label>
        </>
    );
})
