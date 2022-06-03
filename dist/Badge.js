import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import classNames from "classnames";
const Badge = ({ color, pill, text, className, description, children }) => {
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`bg-${color}`]: !!color,
    };
    return (_jsxs("span", { className: classNames(_className, className), children: [text || children || '', !!description && (_jsx("span", { className: "visually-hidden", children: description }))] }));
};
export default React.memo(Badge);
//# sourceMappingURL=Badge.js.map