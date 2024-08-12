"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils/utils");
exports.default = react_1.default.forwardRef(function Input({ bsSize, fuzzyList, type = 'text', className, value, onChange, pattern, ...rest }, ref) {
    const [_pattern, setPattern] = (0, react_1.useState)(pattern);
    (0, react_1.useEffect)(() => {
        setPattern(pattern);
    }, [pattern]);
    const inputClassName = {
        'form-control': !/form-control-plaintext/.test(className || ''),
        [`form-control-${bsSize}`]: !!bsSize,
    };
    const changeHandler = (ev) => {
        if (!!rest.list && fuzzyList) {
            setPattern((0, utils_1.getRegex)(ev.target.value).source);
        }
        if (onChange) {
            onChange(ev);
        }
    };
    return ((0, jsx_runtime_1.jsx)("input", { type: type, className: (0, classnames_1.default)(inputClassName, className), value: value || '', pattern: _pattern, onChange: changeHandler, ref: ref, ...rest }));
});
//# sourceMappingURL=Input.js.map