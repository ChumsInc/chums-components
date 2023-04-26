import React, {ChangeEvent, useRef} from 'react';
import classNames from "classnames";
import {getRegex, noop} from "../utils/utils";
import {InputProps} from "./Input.types";


const Input = ({
                   bsSize,
                   fuzzyList,
                   myRef,
                   type = 'text',
                   className,
                   value,
                   onChange = noop,
                   ...rest
               }: InputProps) => {
    const inputRef = myRef || useRef<HTMLInputElement>(null);

    const inputClassName = {
        'form-control': !/form-control-plaintext/.test(className || ''),
        [`form-control-${bsSize}`]: !!bsSize,
    }

    const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        if (!!rest.list && fuzzyList) {
            if (inputRef.current) {
                inputRef.current.pattern = getRegex(ev.target.value).source;
            }
        }
        onChange(ev);
    }

    return (
        <input type={type}
               className={classNames(inputClassName, className)}
               value={value || ''}
               onChange={changeHandler}
               ref={inputRef} {...rest} />
    )
}
export default Input;
