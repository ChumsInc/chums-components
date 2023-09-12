"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const ToggleButton = ({ id, type = 'checkbox', checked, color = 'primary', size, className, onChange, disabled, children, }) => {
    const buttonId = id ?? (0, react_1.useId)();
    const btnClassName = (0, classnames_1.default)(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-outline-${color}`]: !!color && !checked,
        [`btn-${color}`]: !!color && checked,
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: type, className: "btn-check", id: buttonId, autoComplete: "off", onChange: onChange, checked: checked, disabled: disabled }), (0, jsx_runtime_1.jsx)("label", { htmlFor: buttonId, className: btnClassName, children: children })] }));
};
exports.default = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map