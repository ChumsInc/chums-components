import { HTMLAttributes } from 'react';
import { BootstrapButtonSize } from "./types";
export interface TablePaginationProps extends HTMLAttributes<HTMLDivElement> {
    page: number;
    onChangePage: (page: number) => void;
    rowsPerPage: number;
    onChangeRowsPerPage?: (rowsPerPage: number) => void;
    count: number;
    bsSize?: BootstrapButtonSize;
    rowsPerPageOptions?: number[];
    showFirst?: boolean;
    showLast?: boolean;
}
declare const TablePagination: ({ page, onChangePage, rowsPerPage, onChangeRowsPerPage, count, bsSize, rowsPerPageOptions, showFirst, showLast, className, ...rest }: TablePaginationProps) => JSX.Element;
export default TablePagination;
