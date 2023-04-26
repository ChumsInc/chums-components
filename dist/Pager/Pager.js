import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RowsPerPage from "../RowsPerPage/RowsPerPage";
import Pagination from "../Pagination/Pagination";
import { calcPages } from "./Pager.utils";
const Pager = ({ page, dataLength, rowsPerPage, filtered = false, onChangePage, onChangeRowsPerPage, }) => {
    const pages = calcPages(dataLength, rowsPerPage);
    return (_jsxs("div", { className: "row g-3", children: [_jsx("div", { className: "col-auto", children: _jsx(RowsPerPage, { onChange: onChangeRowsPerPage, value: rowsPerPage }) }), _jsx("div", { className: "col-auto", children: _jsx(Pagination, { pages: pages, page: page, onSelectPage: onChangePage, filtered: filtered }) })] }));
};
export default Pager;
//# sourceMappingURL=Pager.js.map