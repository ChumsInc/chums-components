import React, {ChangeEvent, useEffect, useState} from 'react';
import classNames from "classnames";
import {getRegex} from "../utils/utils";
import {InputProps} from "./Input.types";


export default React.forwardRef(function Input({
                                                   bsSize,
                                                   fuzzyList,
                                                   type = 'text',
                                                   className,
                                                   value,
                                                   onChange,
                                                   pattern,
                                                   ...rest
                                               }: InputProps,
                                               ref: React.ForwardedRef<HTMLInputElement>) {
    const [_pattern, setPattern] = useState<string | undefined>(pattern);

    useEffect(() => {
        setPattern(pattern);
    }, [pattern]);

    const inputClassName = {
        'form-control': !/form-control-plaintext/.test(className || ''),
        [`form-control-${bsSize}`]: !!bsSize,
    }

    const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        if (!!rest.list && fuzzyList) {
            setPattern(getRegex(ev.target.value).source)
        }
        if (onChange) {
            onChange(ev);
        }
    }

    return (
        <input type={type}
               className={classNames(inputClassName, className)}
               value={value || ''}
               pattern={_pattern}
               onChange={changeHandler}
               ref={ref} {...rest} />
    )
})
