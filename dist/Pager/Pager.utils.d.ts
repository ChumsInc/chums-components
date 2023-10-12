import { PageSet } from "./Pager.types";
export declare const filterPage: (page: number, rowsPerPage: number) => (row: any, index: number) => boolean;
export declare const filterByPageSet: (pageSet: PageSet) => (row: any, index: number) => boolean;
export declare const pageFilter: (page: number, rowsPerPage: number) => (row: any, index: number) => boolean;
export declare const calcPages: (rows: number, rowsPerPage: number) => number;
