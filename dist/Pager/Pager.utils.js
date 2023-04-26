export const filterPage = (page, rowsPerPage) => (row, index) => Math.ceil((index + 1) / rowsPerPage) === page;
export const filterByPageSet = (pageSet) => filterPage(pageSet.page, pageSet.rowsPerPage);
export const pageFilter = filterPage;
export const calcPages = (rows, rowsPerPage) => Math.ceil(rows / rowsPerPage);
//# sourceMappingURL=Pager.utils.js.map