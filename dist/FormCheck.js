import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { v4 as uuid4 } from 'uuid';
const FormCheck = ({ id, label, checked, onClick, inline = false, className = {}, type = "checkbox", disabled }) => {
    const inputId = id || uuid4();
    return (_jsxs("div", { className: classNames("form-check", className, { "form-check-inline": inline }), children: [_jsx("input", { type: type, className: "form-check-input", id: inputId, checked: checked, disabled: disabled, onChange: onClick }), _jsx("label", { className: "form-check-label", htmlFor: inputId, children: label })] }));
};
export default FormCheck;
//# sourceMappingURL=FormCheck.js.map