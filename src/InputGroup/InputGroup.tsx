import React, {ReactNode} from "react";
import classNames from "classnames";
import {InputGroupProps} from "./InputGroup.types";

const InputGroup = ({bsSize, className, children}:InputGroupProps) => {
    return (
        <div className={classNames('input-group', {[`input-group-${bsSize}`]: !!bsSize}, className)}>
            {children}
        </div>
    )
}

export default InputGroup;
