import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import classNames from 'classnames';
const FormCheck = ({ type = "checkbox", id, label, checked, onChange, inline = false, className, disabled, title, children, ...props }) => {
    const inputId = id || useId();
    return (_jsxs("div", { className: classNames("form-check", className, { "form-check-inline": inline }), children: [_jsx("input", { type: type, className: "form-check-input", id: inputId, checked: checked, disabled: disabled, title: title, onChange: onChange, ...props }), _jsx("label", { className: "form-check-label", htmlFor: inputId, title: title, children: children ?? label ?? 'Label Missing' })] }));
};
export default FormCheck;
//# sourceMappingURL=FormCheck.js.map