import React from "react";
import classNames from "classnames";
import {SelectProps} from "./Select.types";

/**
 * @deprecated prefer react-bootstrap/FormSelect instead
 */
const Select = ({bsSize, className, children, ...rest}: SelectProps) => {
    const selectClassName = {
        [`form-select-${bsSize}`]: !!bsSize
    }
    return (
        <select className={classNames("form-select", selectClassName, className)} {...rest}>
            {children}
        </select>
    )
}

export default Select;
