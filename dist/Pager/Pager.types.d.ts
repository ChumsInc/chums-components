export interface PageSet {
    page: number;
    rowsPerPage: number;
}
export declare const defaultPageSet: PageSet;
export interface PagerProps {
    page: number;
    rowsPerPage: number;
    dataLength: number;
    filtered?: boolean;
    onChangePage: (page: number) => void;
    onChangeRowsPerPage: (rowsPerPage: number) => void;
}
