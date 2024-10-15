import React from "react";
import RowsPerPage from "../RowsPerPage/RowsPerPage";
import Pagination from "../Pagination/Pagination";
import {PagerProps} from "./Pager.types";
import {calcPages} from "./Pager.utils";

/**
 * @deprecated prefer TablePagination or react-bootstrap/Pagination instead
 */

const Pager = ({
                   page,
                   dataLength,
                   rowsPerPage,
                   filtered = false,
                   onChangePage,
                   onChangeRowsPerPage,
               }: PagerProps) => {

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
