"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Badge = ({ color, pill, text, className, colorCode, description, children }) => {
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`bg-${color}`]: !!color,
    };
    const style = {};
    if (color === 'custom' && !!colorCode) {
        style.backgroundColor = colorCode;
    }
    return ((0, jsx_runtime_1.jsxs)("span", { className: (0, classnames_1.default)(_className, className), style: style, children: [text || children || '', !!description && ((0, jsx_runtime_1.jsx)("span", { className: "visually-hidden", children: description }))] }));
};
exports.default = Badge;
//# sourceMappingURL=Badge.js.map