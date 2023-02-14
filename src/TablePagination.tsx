import React, {useId} from 'react';
import RowsPerPage from "./RowsPerPage";
import {BootstrapButtonSize} from "./types";
import classNames from "classnames";

export interface TablePaginationProps {
    page: number;
    onChangePage: (page: number) => void;
    rowsPerPage: number;
    onChangeRowsPerPage?: (rowsPerPage: number) => void;
    count: number;
    bsSize?: BootstrapButtonSize;
    rowsPerPageOptions?: number[],
    showFirst?: boolean;
    showLast?: boolean;
}

const TablePagination = ({
                             page,
                             onChangePage,
                             rowsPerPage,
                             onChangeRowsPerPage,
                             count,
                             bsSize,
                             rowsPerPageOptions,
                             showFirst,
                             showLast
                         }: TablePaginationProps) => {
    const rppId = useId();
    const first = count === 0 ? 0 : (page * rowsPerPage) + 1;
    const last = Math.min(page * rowsPerPage + rowsPerPage, count);
    const lastPage = rowsPerPage === 0 ? 0 : Math.floor((count - 1) / rowsPerPage);

    const buttonClassName = classNames("btn btn-light", {[`btn-${bsSize}`]: !!bsSize});

    return (
        <div className="row g-3 justify-content-end align-items-baseline">
            <div className="col-auto">
                <label htmlFor={rppId}>Rows Per Page</label>
            </div>
            {!!onChangeRowsPerPage && (
                <div className="col-auto">
                    <RowsPerPage value={rowsPerPage} onChange={onChangeRowsPerPage} pageValues={rowsPerPageOptions}
                                 bsSize={bsSize}
                                 id={rppId}/>
                </div>
            )}
            <div className="col-auto">
                {first}-{last} of {count}
            </div>
            {showFirst && (
                <div className="col-auto">
                    <button className={buttonClassName} disabled={page === 0}
                            onClick={() => onChangePage(0)}>
                        <span className="bi-chevron-bar-left"/>
                    </button>
                </div>
            )}
            <div className="col-auto">
                <button className={buttonClassName} disabled={page === 0}
                        onClick={() => onChangePage(page - 1)}>
                    <span className="bi-chevron-left"/>
                </button>
            </div>
            <div className="col-auto">
                <button className={buttonClassName} disabled={page >= lastPage}
                        onClick={() => onChangePage(page + 1)}>
                    <span className="bi-chevron-right"/>
                </button>
            </div>
            {showLast && (
                <div className="col-auto">
                    <button className={buttonClassName} disabled={page >= lastPage}
                            onClick={() => onChangePage(lastPage)}>
                        <span className="bi-chevron-bar-right"/>
                    </button>
                </div>
            )}
        </div>
    )
}

export default TablePagination
