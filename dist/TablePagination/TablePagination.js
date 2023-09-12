"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const RowsPerPage_1 = __importDefault(require("../RowsPerPage/RowsPerPage"));
const classnames_1 = __importDefault(require("classnames"));
const TablePagination = ({ page, onChangePage, rowsPerPage, onChangeRowsPerPage, count, bsSize, rowsPerPageOptions, showFirst, showLast, className, ...rest }) => {
    const rppId = (0, react_1.useId)();
    const first = count === 0 ? 0 : (page * rowsPerPage) + 1;
    const last = Math.min(page * rowsPerPage + rowsPerPage, count);
    const lastPage = rowsPerPage === 0 ? 0 : Math.floor((count - 1) / rowsPerPage);
    const buttonClassName = (0, classnames_1.default)("btn btn-light", { [`btn-${bsSize}`]: !!bsSize });
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)("row g-3 justify-content-end align-items-baseline", className), ...rest, children: [!!onChangeRowsPerPage && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "col-auto", children: (0, jsx_runtime_1.jsx)("label", { htmlFor: rppId, children: "Rows Per Page" }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-auto", children: (0, jsx_runtime_1.jsx)(RowsPerPage_1.default, { value: rowsPerPage, onChange: onChangeRowsPerPage, pageValues: rowsPerPageOptions, bsSize: bsSize, id: rppId }) })] })), (0, jsx_runtime_1.jsxs)("div", { className: "col-auto", children: [first, "-", last, " of ", count] }), showFirst && ((0, jsx_runtime_1.jsx)("div", { className: "col-auto", children: (0, jsx_runtime_1.jsx)("button", { className: buttonClassName, disabled: page === 0, onClick: () => onChangePage(0), children: (0, jsx_runtime_1.jsx)("span", { className: "bi-chevron-bar-left" }) }) })), (0, jsx_runtime_1.jsx)("div", { className: "col-auto", children: (0, jsx_runtime_1.jsx)("button", { className: buttonClassName, disabled: page === 0, onClick: () => onChangePage(page - 1), children: (0, jsx_runtime_1.jsx)("span", { className: "bi-chevron-left" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-auto", children: (0, jsx_runtime_1.jsx)("button", { className: buttonClassName, disabled: page >= lastPage, onClick: () => onChangePage(page + 1), children: (0, jsx_runtime_1.jsx)("span", { className: "bi-chevron-right" }) }) }), showLast && ((0, jsx_runtime_1.jsx)("div", { className: "col-auto", children: (0, jsx_runtime_1.jsx)("button", { className: buttonClassName, disabled: page >= lastPage, onClick: () => onChangePage(lastPage), children: (0, jsx_runtime_1.jsx)("span", { className: "bi-chevron-bar-right" }) }) }))] }));
};
exports.default = TablePagination;
//# sourceMappingURL=TablePagination.js.map