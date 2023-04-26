export interface PageSet {
    page: number,
    rowsPerPage: number,
}

export const defaultPageSet:PageSet = {
    page: 1,
    rowsPerPage: 25,
}
export interface PagerProps {
    page: number,
    rowsPerPage: number,
    dataLength: number,
    filtered?: boolean,
    onChangePage: (page: number) => void
    onChangeRowsPerPage: (rowsPerPage: number) => void,
}

