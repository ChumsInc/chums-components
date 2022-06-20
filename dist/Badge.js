import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import classNames from "classnames";
import { isLightColor } from "./color-utils";
const Badge = ({ color, pill, text, className, colorCode, description, children }) => {
    const isLight = !!colorCode ? isLightColor(colorCode) : null;
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`bg-${color}`]: !!color,
        'text-light': !!colorCode && !isLight,
        'text-dark': !!colorCode && isLight,
    };
    const style = {};
    if (color === 'custom' && !!colorCode) {
        style.backgroundColor = colorCode;
    }
    return (_jsxs("span", { className: classNames(_className, className), style: style, children: [text || children || '', !!description && (_jsx("span", { className: "visually-hidden", children: description }))] }));
};
export default React.memo(Badge);
//# sourceMappingURL=Badge.js.map