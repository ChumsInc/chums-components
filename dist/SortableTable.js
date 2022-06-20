import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import SortableTableHead from "./SortableTableHead";
import SortableTR from "./SortableTR";
import { noop } from "./utils";
const SortableTable = ({ fields, data, currentSort, onChangeSort, keyField, size = '', rowClassName, onSelectRow = noop, selected = '', className = '', tfoot, children, ...rest }) => {
    const tableClassName = classNames('table', className, {
        [`table-${size}`]: !!size,
    });
    return (_jsxs("table", { className: tableClassName, ...rest, children: [_jsx(SortableTableHead, { currentSort: currentSort, fields: fields, onChangeSort: onChangeSort }), !!data.length && (_jsx("tbody", { children: data.map(row => {
                    const keyValue = typeof keyField === "function" ? keyField(row) : row[keyField];
                    const isSelected = typeof selected === 'function' ? selected(row) : keyValue === selected;
                    return (_jsx(SortableTR, { onClick: () => onSelectRow(row), rowClassName: rowClassName, fields: fields, row: row, selected: isSelected }, keyValue));
                }) })), children, tfoot] }));
};
export default SortableTable;
//# sourceMappingURL=SortableTable.js.map