"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../utils/utils");
const DataTableRow_1 = __importDefault(require("../DataTableRow/DataTableRow"));
const DataTableTBody = ({ fields, data, keyField, rowClassName, renderRow, onSelectRow = utils_1.noop, selected = '', children, ...rest }) => {
    return ((0, jsx_runtime_1.jsxs)("tbody", { ...rest, children: [data.map(row => {
                const keyValue = typeof keyField === "function" ? keyField(row) : row[keyField];
                const isSelected = typeof selected === 'function' ? selected(row) : keyValue === selected;
                if (renderRow) {
                    return renderRow(row);
                }
                return ((0, jsx_runtime_1.jsx)(DataTableRow_1.default, { onClick: () => onSelectRow(row), rowClassName: rowClassName, fields: fields, row: row, selected: isSelected }, keyValue));
            }), children] }));
};
exports.default = DataTableTBody;
//# sourceMappingURL=DataTableTBody.js.map