import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
const StatusButtonGroup = ({ checked, enabledText, disabledText, onChange }) => {
    const btnEnabled = {
        'btn-success': checked,
        'btn-outline-success': !checked,
    };
    const btnDisabled = {
        'btn-danger': !checked,
        'btn-outline-danger': checked,
    };
    return (_jsxs("div", { className: "btn-group btn-group-sm", role: "group", children: [_jsx("button", { type: "button", onClick: () => onChange(true), className: classNames('btn btn-sm', btnEnabled), children: enabledText ?? 'Enabled' }), _jsx("button", { type: "button", onClick: () => onChange(false), className: classNames('btn btn-sm', btnDisabled), children: disabledText ?? 'Disabled' })] }));
};
export default StatusButtonGroup;
//# sourceMappingURL=StatusButtonGroup.js.map