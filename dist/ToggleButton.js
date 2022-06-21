import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
const ToggleButton = ({ id, type = 'checkbox', checked, color = 'primary', size, className, onClick, disabled, children, }) => {
    const btnClassName = classNames(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-outline-${color}`]: !!color,
    });
    return (_jsxs(_Fragment, { children: [_jsx("input", { type: type, className: "btn-check", id: id, autoComplete: "off", onChange: onClick, checked: checked, disabled: disabled }), _jsx("label", { htmlFor: id, className: btnClassName, children: children })] }));
};
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map