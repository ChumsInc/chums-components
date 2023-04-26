import {PageSet} from "./Pager.types";

export const filterPage = (page: number, rowsPerPage: number) => (row: any, index: number): boolean => Math.ceil((index + 1) / rowsPerPage) === page;
export const filterByPageSet = (pageSet: PageSet) => filterPage(pageSet.page, pageSet.rowsPerPage);

export const pageFilter = filterPage;
export const calcPages = (rows: number, rowsPerPage: number): number => Math.ceil(rows / rowsPerPage);
