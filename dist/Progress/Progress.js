"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
/**
 * @deprecated prefer react-bootstrap/Progress instead
 */
const Progress = ({ height, className = '', style, children }) => {
    if (!style) {
        style = {};
    }
    if (height && !style.height) {
        style.height = height;
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('progress', className), style: style, children: children }));
};
exports.default = Progress;
//# sourceMappingURL=Progress.js.map