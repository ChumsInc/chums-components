"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataTable;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils/utils");
const DataTableHead_1 = __importDefault(require("../DataTableHead/DataTableHead"));
const DataTableTBody_1 = __importDefault(require("../DataTableTBody/DataTableTBody"));
function DataTable({ fields, data, keyField, size = '', rowClassName, renderRow, onSelectRow = utils_1.noop, selected = '', className = '', tfoot, children, ...rest }) {
    const tableClassName = (0, classnames_1.default)('table', className, {
        [`table-${size}`]: !!size,
    });
    return ((0, jsx_runtime_1.jsxs)("table", { className: tableClassName, ...rest, children: [(0, jsx_runtime_1.jsx)(DataTableHead_1.default, { fields: fields }), !!data.length && ((0, jsx_runtime_1.jsx)(DataTableTBody_1.default, { fields: fields, data: data, keyField: keyField, rowClassName: rowClassName, renderRow: renderRow, onSelectRow: onSelectRow, selected: selected })), children, tfoot] }));
}
//# sourceMappingURL=DataTable.js.map