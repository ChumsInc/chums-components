"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const PageButton_1 = __importDefault(require("../PageButton"));
const PaginationUL_1 = __importDefault(require("./PaginationUL"));
const Pagination_utils_1 = require("./Pagination.utils");
const Pagination = ({ page, pages, filtered, className, maxButtons = Pagination_utils_1.DEFAULT_MAX_PAGES, onSelectPage }) => {
    const onSelect = (nextPage) => {
        if (!nextPage || nextPage < 1 || nextPage > pages) {
            return;
        }
        onSelectPage(nextPage);
    };
    const hasMore = pages > maxButtons;
    const maxPageButtons = pages > maxButtons ? maxButtons - 2 : maxButtons;
    let renderPages = [];
    const pageRange = Math.floor(maxPageButtons / 2);
    const beforeRender = Math.min(page - pageRange, pages - maxPageButtons);
    const afterRender = Math.max(page + pageRange, maxPageButtons);
    const firstEllipsis = [];
    const lastEllipsis = [];
    for (let i = 2; i < pages; i += 1) {
        if (i <= beforeRender) {
            firstEllipsis.push(i);
        }
        else if (i < afterRender) {
            renderPages.push(i);
        }
        else {
            lastEllipsis.push(i);
        }
    }
    return ((0, jsx_runtime_1.jsx)("nav", { "aria-label": "Page Navigation", children: (0, jsx_runtime_1.jsxs)(PaginationUL_1.default, { className: (0, classnames_1.default)("pagination pagination-sm", className, { filtered }), children: [hasMore && ((0, jsx_runtime_1.jsx)(PageButton_1.default, { page: page - 1, label: Pagination_utils_1.PAGE_LABELS.prev, disabled: page <= 1, onClick: onSelect })), (0, jsx_runtime_1.jsx)(PageButton_1.default, { page: 1, onClick: onSelect, isCurrent: page === 1 }), hasMore && firstEllipsis.length === 1 && ((0, jsx_runtime_1.jsx)(PageButton_1.default, { page: firstEllipsis[0], label: firstEllipsis[0] })), hasMore && firstEllipsis.length > 1 && ((0, jsx_runtime_1.jsx)(PageButton_1.default, { page: 0, label: Pagination_utils_1.PAGE_LABELS.ellipsis, disabled: true })), renderPages.map(p => ((0, jsx_runtime_1.jsx)(PageButton_1.default, { page: p, isCurrent: p === page, onClick: onSelect }, p))), hasMore && lastEllipsis.length === 1 && ((0, jsx_runtime_1.jsx)(PageButton_1.default, { page: lastEllipsis[0], label: lastEllipsis[0] })), hasMore && lastEllipsis.length > 1 && ((0, jsx_runtime_1.jsx)(PageButton_1.default, { page: 0, label: Pagination_utils_1.PAGE_LABELS.ellipsis, disabled: true })), pages > 1 && ((0, jsx_runtime_1.jsx)(PageButton_1.default, { page: pages, isCurrent: page === pages, label: pages, onClick: onSelect })), hasMore && ((0, jsx_runtime_1.jsx)(PageButton_1.default, { page: page + 1, label: Pagination_utils_1.PAGE_LABELS.next, onClick: onSelect, disabled: page === pages }))] }) }));
};
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map