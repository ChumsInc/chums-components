import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { noop } from "../utils/utils";
import DataTableHead from "../DataTableHead/DataTableHead";
import DataTableTBody from "../DataTableTBody/DataTableTBody";
const DataTable = ({ fields, data, keyField, size = '', rowClassName, renderRow, onSelectRow = noop, selected = '', className = '', tfoot, children, ...rest }) => {
    const tableClassName = classNames('table', className, {
        [`table-${size}`]: !!size,
    });
    return (_jsxs("table", { className: tableClassName, ...rest, children: [_jsx(DataTableHead, { fields: fields }), !!data.length && (_jsx(DataTableTBody, { fields: fields, data: data, keyField: keyField, rowClassName: rowClassName, renderRow: renderRow, onSelectRow: onSelectRow, selected: selected })), children, tfoot] }));
};
export default DataTable;
//# sourceMappingURL=DataTable.js.map