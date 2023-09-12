"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const TabItem = ({ id, title, icon, active, canClose, disabled, className, onSelect, onClose, }) => {
    (0, react_1.useEffect)(() => {
        if (canClose && !onClose) {
            console.warn('TabItem: missing onClose handler for canClose = true');
        }
    }, [canClose, onClose]);
    const clickHandler = () => {
        if (disabled || active) {
            return;
        }
        onSelect(id);
    };
    const onClickClose = () => {
        if (canClose && !!onClose) {
            onClose(id);
        }
    };
    return ((0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: (0, jsx_runtime_1.jsxs)("button", { className: (0, classnames_1.default)('nav-link', className, { active, disabled }), tabIndex: disabled ? -1 : 0, onClick: clickHandler, children: [!!icon && (0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)('nav-item-icon me-1', icon) }), (0, jsx_runtime_1.jsx)("span", { className: "nav-item-text", children: title }), canClose && ((0, jsx_runtime_1.jsx)("span", { "aria-label": "Close", onClick: onClickClose, className: "ms-2 bi-x-lg" }))] }) }));
};
exports.default = TabItem;
//# sourceMappingURL=TabItem.js.map