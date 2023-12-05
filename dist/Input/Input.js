"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils/utils");
const Input = ({ bsSize, fuzzyList, myRef, type = 'text', className, value, onChange = utils_1.noop, ...rest }) => {
    const inputRef = myRef || (0, react_1.useRef)(null);
    const inputClassName = {
        'form-control': !/form-control-plaintext/.test(className || ''),
        [`form-control-${bsSize}`]: !!bsSize,
    };
    const changeHandler = (ev) => {
        if (!!rest.list && fuzzyList) {
            if (inputRef.current) {
                inputRef.current.pattern = (0, utils_1.getRegex)(ev.target.value).source;
            }
        }
        onChange(ev);
    };
    return ((0, jsx_runtime_1.jsx)("input", { type: type, className: (0, classnames_1.default)(inputClassName, className), value: value || '', onChange: changeHandler, ref: inputRef, ...rest }));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map