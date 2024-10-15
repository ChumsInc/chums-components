import React from "react";
import classNames from "classnames";
import {InputGroupProps} from "./InputGroup.types";

/**
 * @deprecated Prefer react-bootstrap/InputGroup instead
 */
const InputGroup = ({bsSize, className, children}: InputGroupProps) => {
    return (
        <div className={classNames('input-group', {[`input-group-${bsSize}`]: !!bsSize}, className)}>
            {children}
        </div>
    )
}

export default InputGroup;
