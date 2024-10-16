import React from 'react';
import classNames from 'classnames';
import PageButton from "../PageButton";
import {PaginationProps} from "./Pagination.types";
import PaginationUL from "./PaginationUL";
import {DEFAULT_MAX_PAGES, PAGE_LABELS} from "./Pagination.utils";

/**
 * @deprecated prefer TablePagination or react-bootstrap/Pagination instead
 */
const Pagination = ({
                        page,
                        pages,
                        filtered,
                        className,
                        maxButtons = DEFAULT_MAX_PAGES,
                        onSelectPage
                    }: PaginationProps) => {
    const onSelect = (nextPage: number) => {
        if (!nextPage || nextPage < 1 || nextPage > pages) {
            return;
        }
        onSelectPage(nextPage);
    }

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
        } else if (i < afterRender) {
            renderPages.push(i);
        } else {
            lastEllipsis.push(i);
        }
    }

    return (
        <nav aria-label="Page Navigation">

            <PaginationUL className={classNames("pagination pagination-sm", className, {filtered})}>
                {hasMore && (
                    <PageButton page={page - 1} label={PAGE_LABELS.prev} disabled={page <= 1} onClick={onSelect}/>
                )}
                <PageButton page={1} onClick={onSelect} isCurrent={page === 1}/>
                {hasMore && firstEllipsis.length === 1 && (
                    <PageButton page={firstEllipsis[0]!} label={firstEllipsis[0]!}/>
                )}
                {hasMore && firstEllipsis.length > 1 && (
                    <PageButton page={0} label={PAGE_LABELS.ellipsis} disabled/>
                )}
                {renderPages.map(p => (
                    <PageButton key={p} page={p} isCurrent={p === page} onClick={onSelect}/>
                ))}
                {hasMore && lastEllipsis.length === 1 && (
                    <PageButton page={lastEllipsis[0]!} label={lastEllipsis[0]!}/>
                )}
                {hasMore && lastEllipsis.length > 1 && (
                    <PageButton page={0} label={PAGE_LABELS.ellipsis} disabled/>
                )}
                {pages > 1 && (
                    <PageButton page={pages} isCurrent={page === pages} label={pages} onClick={onSelect}/>
                )}
                {hasMore && (
                    <PageButton page={page + 1} label={PAGE_LABELS.next} onClick={onSelect}
                                disabled={page === pages}/>
                )}
            </PaginationUL>
        </nav>
    )
}
export default Pagination;
