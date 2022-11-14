/// <reference types="react" />
import { BootstrapButtonSize } from "./types";
export interface TablePaginationProps {
    page: number;
    onChangePage: (page: number) => void;
    rowsPerPage: number;
    onChangeRowsPerPage: (rowsPerPage: number) => void;
    count: number;
    bsSize?: BootstrapButtonSize;
    rowsPerPageOptions?: number[];
    showFirst?: boolean;
    showLast?: boolean;
}
declare const TablePagination: ({ page, onChangePage, rowsPerPage, onChangeRowsPerPage, count, bsSize, rowsPerPageOptions, showFirst, showLast }: TablePaginationProps) => JSX.Element;
export default TablePagination;
