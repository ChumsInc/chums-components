"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const NavItem_1 = __importDefault(require("./NavItem"));
function NavList({ variant, vertical, align, fill, items, currentTab, onChange, onClose, className, ...rest }) {
    const navClassName = {
        'justify-content-center': align === 'center',
        'justify-content-end': align === 'end',
        'flex-column': vertical,
        'nav-tabs': variant === 'tabs',
        'nav-pills': variant === 'pills',
        'nav-underline': variant === 'underline',
        'nav-fill': fill === 'fill',
        'nav-justified': fill === 'justified',
    };
    return ((0, jsx_runtime_1.jsx)("ul", { className: (0, classnames_1.default)('nav', navClassName, className), ...rest, children: items.map(item => (0, jsx_runtime_1.jsx)(NavItem_1.default, { ...item, active: currentTab === item.id, onSelect: onChange, onClose: onClose }, item.id)) }));
}
exports.default = NavList;
//# sourceMappingURL=NavList.js.map