import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import classNames from "classnames";
import { getRegex } from "./utils";
const noop = () => {
};
const Input = ({ bsSize = '', fuzzyList, myRef, type = 'text', className, value, onChange = noop, ...rest }) => {
    const inputRef = myRef || useRef(null);
    const inputClassName = {
        'form-control': !/form-control-plaintext/.test(className || ''),
        [`form-control-${bsSize}`]: !!bsSize,
    };
    const changeHandler = (ev) => {
        if (!!rest.list && fuzzyList) {
            if (inputRef.current) {
                inputRef.current.pattern = getRegex(ev.target.value).source;
            }
        }
        onChange(ev);
    };
    return (_jsx("input", { type: type, className: classNames(inputClassName, className), value: value || '', onChange: changeHandler, ref: inputRef, ...rest }));
};
export default Input;
//# sourceMappingURL=Input.js.map