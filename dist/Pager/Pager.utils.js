"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPages = exports.pageFilter = exports.filterByPageSet = exports.filterPage = void 0;
const filterPage = (page, rowsPerPage) => (row, index) => Math.ceil((index + 1) / rowsPerPage) === page;
exports.filterPage = filterPage;
const filterByPageSet = (pageSet) => (0, exports.filterPage)(pageSet.page, pageSet.rowsPerPage);
exports.filterByPageSet = filterByPageSet;
exports.pageFilter = exports.filterPage;
const calcPages = (rows, rowsPerPage) => Math.ceil(rows / rowsPerPage);
exports.calcPages = calcPages;
//# sourceMappingURL=Pager.utils.js.map