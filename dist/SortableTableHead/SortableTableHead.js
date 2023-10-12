"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SortableTH_1 = __importDefault(require("../SortableTH/SortableTH"));
const classnames_1 = __importDefault(require("classnames"));
const SortableTableHead = ({ currentSort, fields, onChangeSort, }) => {
    const { field, ascending } = currentSort;
    return ((0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: fields.map((tableField, index) => ((0, jsx_runtime_1.jsx)(SortableTH_1.default, { field: tableField, sorted: field === tableField.field, ascending: ascending, className: (0, classnames_1.default)(typeof tableField.className === 'function'
                    ? { [`text-${tableField.align}`]: !!tableField.align }
                    : tableField.className), onClick: onChangeSort }, index))) }) }));
};
exports.default = SortableTableHead;
//# sourceMappingURL=SortableTableHead.js.map