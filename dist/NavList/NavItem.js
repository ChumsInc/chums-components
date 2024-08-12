"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
function NavItem({ id, title, icon, className, element, active = false, disabled = false, onSelect, canClose, onClose, }) {
    (0, react_1.useEffect)(() => {
        if (!onSelect && !element) {
            console.warn('NavItem:onSelect is required if element is undefined');
        }
    }, []);
    const closeHandler = () => {
        if (canClose && onClose !== undefined) {
            onClose(id);
        }
    };
    const clickHandler = () => {
        if (disabled || active || !onSelect) {
            return;
        }
        onSelect(id);
    };
    if (element) {
        return ((0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: element }));
    }
    return ((0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: (0, jsx_runtime_1.jsxs)("button", { type: "button", disabled: disabled, role: "tab", tabIndex: disabled ? -1 : 0, className: (0, classnames_1.default)('nav-link', { active, disabled }, className), onClick: clickHandler, children: [!!icon && (0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)('nav-item-icon me-1', icon) }), (0, jsx_runtime_1.jsx)("span", { className: "nav-item-text", children: title }), canClose && ((0, jsx_runtime_1.jsx)("span", { "aria-label": "Close", onClick: closeHandler, className: "ms-2 bi-x-lg" }))] }) }));
}
//# sourceMappingURL=NavItem.js.map