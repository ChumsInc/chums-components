import React from "react";
import RowsPerPage from "./RowsPerPage";
import Pagination from "./Pagination";

export interface PageSet {
    page: number,
    rowsPerPage: number,
}

export const filterPage = (page: number, rowsPerPage: number) => (row: any, index: number): boolean => Math.ceil((index + 1) / rowsPerPage) === page;
export const filterByPageSet = (pageSet: PageSet) => filterPage(pageSet.page, pageSet.rowsPerPage);

export const pageFilter = filterPage;
export const calcPages = (rows: number, rowsPerPage: number): number => Math.ceil(rows / rowsPerPage);

export interface PagerProps {
    page: number,
    rowsPerPage: number,
    dataLength: number,
    filtered?: boolean,
    onChangePage: (page: number) => void
    onChangeRowsPerPage: (rowsPerPage: number) => void,
}

const Pager: React.FC<PagerProps> = ({
                                    page,
                                    dataLength,
                                    rowsPerPage,
                                    filtered = false,
                                    onChangePage,
                                    onChangeRowsPerPage,
                                }) => {

    const pages = calcPages(dataLength, rowsPerPage);
    return (
        <div className="row g-3">
            <div className="col-auto">
                <RowsPerPage onChange={onChangeRowsPerPage} value={rowsPerPage}/>
            </div>
            <div className="col-auto">
                <Pagination pages={pages} page={page} onSelectPage={onChangePage} filtered={filtered}/>
            </div>
        </div>
    )
}
export default Pager;
