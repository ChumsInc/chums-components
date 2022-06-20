import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import numeral from "numeral";
import Badge from "./Badge";
const Alert = ({ message, color = 'primary', title, className = '', context, count = 0, canDismiss = true, onDismiss, children }) => {
    if (process.env.NODE_ENV !== 'production' && canDismiss && !onDismiss) {
        console.warn('Alert component is missing onDismiss handler with canDismiss=true.', alert);
    }
    const elClassName = {
        [`alert-${color}`]: !!color,
        'alert-dismissible': canDismiss,
    };
    return (_jsxs("div", { className: classNames('alert my-3', elClassName, className), children: [!!context && (_jsxs("strong", { className: "me-1", children: ["[", context, "]"] })), !!title && (_jsxs("strong", { className: "me-1", children: [title, ":"] })), message || children || null, !!count && count > 1 && (_jsx(Badge, { color: color, className: "mx-3", children: numeral(count).format('0,0') })), canDismiss && typeof onDismiss === 'function' && (_jsx("button", { type: "button", "aria-label": "close", onClick: onDismiss, className: "btn-close" }))] }));
};
export default Alert;
//# sourceMappingURL=Alert.js.map