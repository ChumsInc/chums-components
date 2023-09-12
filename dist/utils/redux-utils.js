"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultListActions = exports.initialCurrentValueState = exports.initialListState = void 0;
const query_1 = require("@reduxjs/toolkit/query");
const toolkit_1 = require("@reduxjs/toolkit");
exports.initialListState = {
    values: [],
    loading: query_1.QueryStatus.uninitialized,
    loaded: false,
    search: '',
    showInactive: false,
    page: 0,
    rowsPerPage: 25
};
exports.initialCurrentValueState = {
    value: null,
    loading: query_1.QueryStatus.uninitialized,
    saving: query_1.QueryStatus.uninitialized
};
const createDefaultListActions = (prefix) => {
    return {
        setPage: (0, toolkit_1.createAction)(`${prefix}/setPage`),
        setRowsPerPage: (0, toolkit_1.createAction)(`${prefix}/setRowsPerPage`),
        setSearch: (0, toolkit_1.createAction)(`${prefix}/setSearch`),
        toggleShowInactive: (0, toolkit_1.createAction)(`${prefix}/toggleShowInactive`),
        setSort: (0, toolkit_1.createAction)(`${prefix}/setSort`)
    };
};
exports.createDefaultListActions = createDefaultListActions;
//# sourceMappingURL=redux-utils.js.map