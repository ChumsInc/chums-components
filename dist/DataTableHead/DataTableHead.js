"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const DataTableTH_1 = __importDefault(require("../DataTableTH/DataTableTH"));
const classnames_1 = __importDefault(require("classnames"));
const DataTableHead = ({ fields, ...rest }) => {
    return ((0, jsx_runtime_1.jsx)("thead", { ...rest, children: (0, jsx_runtime_1.jsx)("tr", { children: fields.map((tableField, index) => ((0, jsx_runtime_1.jsx)(DataTableTH_1.default, { field: tableField, className: (0, classnames_1.default)(typeof tableField.className === 'function'
                    ? { [`text-${tableField.align}`]: !!tableField.align }
                    : tableField.className) }, index))) }) }));
};
exports.default = DataTableHead;
//# sourceMappingURL=DataTableHead.js.map