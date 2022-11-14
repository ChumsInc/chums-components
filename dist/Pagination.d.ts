import React from 'react';
import classNames from 'classnames';
export interface PaginationProps {
    page: number;
    pages: number;
    filtered?: boolean;
    className?: string | classNames.ArgumentArray;
    maxButtons?: number;
    onSelectPage: (page: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
