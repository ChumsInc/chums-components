import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
const FormCheck = ({ label, checked, onClick, inline = false, className = {}, type = "checkbox" }) => {
    return (_jsxs("div", { className: classNames("form-check", className, { "form-check-inline": inline }), children: [_jsx("input", { type: type, className: "form-check-input", checked: checked, onChange: onClick }), _jsx("label", { className: "form-check-label", onClick: onClick, children: label })] }));
};
export default FormCheck;
//# sourceMappingURL=FormCheck.js.map