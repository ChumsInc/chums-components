"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const FormColumn = ({ label, labelProps, width = 8, className, align = 'baseline', children }) => {
    const parentClassName = {
        [`align-items-${align}`]: !className?.includes('align-items') && !!align,
    };
    const labelClassName = {
        [`col-${12 - width}`]: !!width,
        'col-auto': !width,
        'form-label': true,
    };
    const containerClassName = {
        [`col-${width}`]: !!width,
        'col': !width,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('row g-3', parentClassName, className), children: [(0, jsx_runtime_1.jsx)("label", { ...labelProps, className: (0, classnames_1.default)(labelClassName), children: label }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(containerClassName), children: children })] }));
};
exports.default = FormColumn;
//# sourceMappingURL=FormColumn.js.map