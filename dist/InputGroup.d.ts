import React, { ReactNode } from "react";
export interface InputGroupProps {
    bsSize?: 'sm' | 'lg';
    className?: string | object;
    children?: ReactNode;
}
declare const InputGroup: React.FC<InputGroupProps>;
export default InputGroup;
