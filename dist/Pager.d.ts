import React from "react";
export declare const filterPage: (page: number, rowsPerPage: number) => (row: any, index: number) => boolean;
export declare const pageFilter: (page: number, rowsPerPage: number) => (row: any, index: number) => boolean;
export declare const calcPages: (rows: number, rowsPerPage: number) => number;
export interface PagerProps {
    page: number;
    rowsPerPage: number;
    dataLength: number;
    filtered?: boolean;
    onChangePage: (page: number) => void;
    onChangeRowsPerPage: (rowsPerPage: number) => void;
}
declare const Pager: React.FC<PagerProps>;
export default Pager;