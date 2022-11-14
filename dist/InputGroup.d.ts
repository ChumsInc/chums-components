import React, { ReactNode } from "react";
import classNames from "classnames";
export interface InputGroupProps {
    bsSize?: 'sm' | 'lg';
    className?: string | classNames.ArgumentArray;
    children?: ReactNode;
}
declare const InputGroup: React.FC<InputGroupProps>;
export default InputGroup;
