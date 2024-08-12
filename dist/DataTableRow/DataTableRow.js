"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataTableRow;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils/utils");
function DataTableRow({ className, rowClassName, selected, fields, row, trRef, onClick = utils_1.noop, ...rest }) {
    const clickHandler = () => {
        return onClick ? onClick() : (0, utils_1.noop)();
    };
    const _className = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;
    if (!row) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("tr", { ref: trRef, className: (0, classnames_1.default)({ 'table-active': selected }, className, _className), onClick: clickHandler, ...rest, children: fields.map((field, index) => {
            const fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
            if (typeof field.render === 'function') {
                return ((0, jsx_runtime_1.jsx)("td", { className: (0, classnames_1.default)({ [`text-${field.align}`]: !!field.align }, fieldClassName), colSpan: field.colSpan, children: field.render(row) }, index));
            }
            if (row[field.field] === undefined) {
                return (0, jsx_runtime_1.jsx)("td", {}, index);
            }
            return ((0, jsx_runtime_1.jsx)("td", { className: (0, classnames_1.default)({ [`text-${field.align}`]: !!field.align }, fieldClassName), colSpan: field.colSpan, children: row[field.field] }, index));
        }) }));
}
//# sourceMappingURL=DataTableRow.js.map