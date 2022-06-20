import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
const TabItem = ({ id, title, icon, active, canClose, disabled, className, onSelect, onClose, }) => {
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
    return (_jsx("li", { className: "nav-item", children: _jsxs("button", { className: classNames('nav-link', className, { active, disabled }), tabIndex: disabled ? -1 : 0, onClick: clickHandler, children: [!!icon && _jsx("span", { className: classNames('nav-item-icon me-1', icon) }), _jsx("span", { className: "nav-item-text", children: title }), canClose && (_jsx("span", { "aria-label": "Close", onClick: onClickClose, className: "ms-2 bi-x-lg" }))] }) }));
};
export default React.memo(TabItem);
//# sourceMappingURL=TabItem.js.map