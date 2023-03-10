import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { noop } from "./utils";
import DataTableRow from "./DataTableRow";
const DataTableTBody = ({ fields, data, keyField, rowClassName, onSelectRow = noop, selected = '', children, ...rest }) => {
    return (_jsxs("tbody", { ...rest, children: [data.map(row => {
                const keyValue = typeof keyField === "function" ? keyField(row) : row[keyField];
                const isSelected = typeof selected === 'function' ? selected(row) : keyValue === selected;
                return (_jsx(DataTableRow, { onClick: () => onSelectRow(row), rowClassName: rowClassName, fields: fields, row: row, selected: isSelected }, keyValue));
            }), children] }));
};
export default DataTableTBody;
//# sourceMappingURL=DataTableTBody.js.map