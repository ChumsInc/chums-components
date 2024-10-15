"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const RowsPerPage_1 = __importDefault(require("../RowsPerPage/RowsPerPage"));
const Pagination_1 = __importDefault(require("../Pagination/Pagination"));
const Pager_utils_1 = require("./Pager.utils");
/**
 * @deprecated prefer TablePagination or react-bootstrap/Pagination instead
 */
const Pager = ({ page, dataLength, rowsPerPage, filtered = false, onChangePage, onChangeRowsPerPage, }) => {
    const pages = (0, Pager_utils_1.calcPages)(dataLength, rowsPerPage);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "row g-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-auto", children: (0, jsx_runtime_1.jsx)(RowsPerPage_1.default, { onChange: onChangeRowsPerPage, value: rowsPerPage }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-auto", children: (0, jsx_runtime_1.jsx)(Pagination_1.default, { pages: pages, page: page, onSelectPage: onChangePage, filtered: filtered }) })] }));
};
exports.default = Pager;
//# sourceMappingURL=Pager.js.map