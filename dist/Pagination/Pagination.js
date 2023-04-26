import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import PageButton from "../PageButton";
import PaginationUL from "./PaginationUL";
import { DEFAULT_MAX_PAGES, PAGE_LABELS } from "./Pagination.utils";
const Pagination = ({ page, pages, filtered, className, maxButtons = DEFAULT_MAX_PAGES, onSelectPage }) => {
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
    return (_jsx("nav", { "aria-label": "Page Navigation", children: _jsxs(PaginationUL, { className: classNames("pagination pagination-sm", className, { filtered }), children: [hasMore && (_jsx(PageButton, { page: page - 1, label: PAGE_LABELS.prev, disabled: page <= 1, onClick: onSelect })), _jsx(PageButton, { page: 1, onClick: onSelect, isCurrent: page === 1 }), hasMore && firstEllipsis.length === 1 && (_jsx(PageButton, { page: firstEllipsis[0], label: firstEllipsis[0] })), hasMore && firstEllipsis.length > 1 && (_jsx(PageButton, { page: 0, label: PAGE_LABELS.ellipsis, disabled: true })), renderPages.map(p => (_jsx(PageButton, { page: p, isCurrent: p === page, onClick: onSelect }, p))), hasMore && lastEllipsis.length === 1 && (_jsx(PageButton, { page: lastEllipsis[0], label: lastEllipsis[0] })), hasMore && lastEllipsis.length > 1 && (_jsx(PageButton, { page: 0, label: PAGE_LABELS.ellipsis, disabled: true })), pages > 1 && (_jsx(PageButton, { page: pages, isCurrent: page === pages, label: pages, onClick: onSelect })), hasMore && (_jsx(PageButton, { page: page + 1, label: PAGE_LABELS.next, onClick: onSelect, disabled: page === pages }))] }) }));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map