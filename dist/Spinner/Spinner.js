"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
/**
 * @deprecated prefer react-bootstrap/Spinner instead
 */
const Spinner = ({ type, bsSize, role = 'status', hiddenLabel, color, className, ...rest }) => {
    const spinnerClassName = {
        'spinner-border': type === 'border',
        'spinner-grow': type === 'grow',
        [`spinner-border-${bsSize}`]: !!bsSize,
        [`text-${color}`]: !!color,
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(spinnerClassName, className), role: role, ...rest, children: !!hiddenLabel && ((0, jsx_runtime_1.jsx)("span", { className: "visually-hidden", children: hiddenLabel })) }));
};
exports.default = Spinner;
//# sourceMappingURL=Spinner.js.map