import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { noop } from "./utils";
import DataTableHead from "./DataTableHead";
import DataTableTBody from "./DataTableTBody";
export { default as DataTableRow } from './DataTableRow';
export { default as DataTableTH } from './DataTableTH';
export { DataTableHead, DataTableTBody };
const DataTable = ({ fields, data, keyField, size = '', rowClassName, renderRow, onSelectRow = noop, selected = '', className = '', tfoot, children, ...rest }) => {
    const tableClassName = classNames('table', className, {
        [`table-${size}`]: !!size,
    });
    return (_jsxs("table", { className: tableClassName, ...rest, children: [_jsx(DataTableHead, { fields: fields }), !!data.length && (_jsx(DataTableTBody, { fields: fields, data: data, keyField: keyField, rowClassName: rowClassName, renderRow: renderRow, onSelectRow: onSelectRow, selected: selected })), children, tfoot] }));
};
export default DataTable;
//# sourceMappingURL=DataTable.js.map