import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import classNames from "classnames";
const ToggleButton = ({ id, type = 'checkbox', checked, color = 'primary', size, className, onChange, disabled, children, }) => {
    const buttonId = id ?? useId();
    const btnClassName = classNames(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-outline-${color}`]: !!color && !checked,
        [`btn-${color}`]: !!color && checked,
    });
    return (_jsxs(_Fragment, { children: [_jsx("input", { type: type, className: "btn-check", id: buttonId, autoComplete: "off", onChange: onChange, checked: checked, disabled: disabled }), _jsx("label", { htmlFor: id, className: btnClassName, children: children })] }));
};
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map