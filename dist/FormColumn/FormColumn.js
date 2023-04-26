import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
const FormColumn = ({ label, width = 8, className, align = 'baseline', children }) => {
    const parentClassName = {
        [`align-items-${align}`]: !className?.includes('align-items') && !!align,
    };
    const labelClassName = {
        [`col-${12 - width}`]: !!width,
        'col-auto': !width,
        'form-label': true,
    };
    const containerClassName = {
        [`col-${width}`]: !!width,
        'col': !width,
    };
    return (_jsxs("div", { className: classNames('row g-3', parentClassName, className), children: [_jsx("label", { className: classNames(labelClassName), children: label }), _jsx("div", { className: classNames(containerClassName), children: children })] }));
};
export default FormColumn;
//# sourceMappingURL=FormColumn.js.map