"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Badge_1 = __importDefault(require("../Badge/Badge"));
const utils_1 = require("../utils/utils");
/**
 * @deprecated Prefer react-bootstrap/Alert instead
 */
const Alert = ({ message, color = 'primary', title, className = '', context, count = 0, canDismiss, onDismiss, children }) => {
    if (typeof onDismiss === 'function') {
        canDismiss = true;
    }
    if (process.env.NODE_ENV !== 'production' && canDismiss && !onDismiss) {
        console.warn('Alert component is missing onDismiss handler with canDismiss=true.', alert);
    }
    const elClassName = {
        [`alert-${color}`]: !!color,
        'alert-dismissible': canDismiss,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('alert my-3', elClassName, className), children: [!!context && ((0, jsx_runtime_1.jsxs)("strong", { className: "me-1", children: ["[", context, "]"] })), !!title && ((0, jsx_runtime_1.jsxs)("strong", { className: "me-1", children: [title, ":"] })), message || children || null, !!count && count > 1 && ((0, jsx_runtime_1.jsx)(Badge_1.default, { color: color, className: "mx-3", children: (0, utils_1.commaFormatter)(count) })), canDismiss && typeof onDismiss === 'function' && ((0, jsx_runtime_1.jsx)("button", { type: "button", "aria-label": "close", onClick: onDismiss, className: "btn-close" }))] }));
};
exports.default = Alert;
//# sourceMappingURL=Alert.js.map