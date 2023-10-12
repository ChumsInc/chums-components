import { HTMLAttributes } from "react";
import { BootstrapButtonSize } from "../types";
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
