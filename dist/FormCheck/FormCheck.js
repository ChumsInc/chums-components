"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const FormCheck = ({ type = "checkbox", id, label, checked, onChange, inline = false, className, disabled, title, children, ...props }) => {
    const inputId = id || (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)("form-check", className, { "form-check-inline": inline }), children: [(0, jsx_runtime_1.jsx)("input", { type: type, className: "form-check-input", id: inputId, checked: checked, disabled: disabled, title: title, onChange: onChange, ...props }), (0, jsx_runtime_1.jsx)("label", { className: "form-check-label", htmlFor: inputId, title: title, children: children ?? label ?? 'Label Missing' })] }));
};
exports.default = FormCheck;
//# sourceMappingURL=FormCheck.js.map