import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
export const defaultRowsPerPageValues = [10, 25, 50, 100, 250, 500, 1000];
const RowsPerPage = ({ value, pageValues = defaultRowsPerPageValues, onChange }) => {
    const changeHandler = (ev) => onChange(Number(ev.target.value));
    return (_jsx("select", { value: value, onChange: changeHandler, className: "form-select form-select-sm", children: pageValues.map(value => (_jsx("option", { value: value, children: value }, value))) }));
};
export default memo(RowsPerPage);
//# sourceMappingURL=RowsPerPage.js.map