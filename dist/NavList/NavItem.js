import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import classNames from "classnames";
export default function NavItem({ id, title, icon, className, element, active = false, disabled = false, onSelect, canClose, onClose, }) {
    useEffect(() => {
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
        return (_jsx("li", { className: "nav-item", children: element }));
    }
    return (_jsx("li", { className: "nav-item", children: _jsxs("button", { type: "button", disabled: disabled, role: "tab", tabIndex: disabled ? -1 : 0, className: classNames('nav-link', { active, disabled }, className), onClick: clickHandler, children: [!!icon && _jsx("span", { className: classNames('nav-item-icon me-1', icon) }), _jsx("span", { className: "nav-item-text", children: title }), canClose && (_jsx("span", { "aria-label": "Close", onClick: closeHandler, className: "ms-2 bi-x-lg" }))] }) }));
}
//# sourceMappingURL=NavItem.js.map