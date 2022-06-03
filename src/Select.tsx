import React, {ReactNode, SelectHTMLAttributes} from "react";
import classNames from "classnames";
import {BootstrapSize} from "./types";


export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    bsSize?: BootstrapSize,
    children?: ReactNode
}
const Select:React.FC<SelectProps> = ({bsSize, className, children, ...rest}) => {
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
