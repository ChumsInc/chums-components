import React, {ReactNode} from "react";
import classNames from "classnames";

export interface InputGroupProps {
    bsSize?: 'sm'|'lg',
    className?: string|object,
    children?: ReactNode,
}
const InputGroup:React.FC<InputGroupProps> = ({bsSize = '', className, children}) => {
    return (
        <div className={classNames('input-group', {[`input-group-${bsSize}`]: !!bsSize}, className)}>
            {children}
        </div>
    )
}

export default InputGroup;
