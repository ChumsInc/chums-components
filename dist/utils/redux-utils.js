import { QueryStatus } from "@reduxjs/toolkit/query";
import { createAction } from "@reduxjs/toolkit";
export const initialListState = {
    values: [],
    loading: QueryStatus.uninitialized,
    loaded: false,
    search: '',
    showInactive: false,
    page: 0,
    rowsPerPage: 25
};
export const initialCurrentValueState = {
    value: null,
    loading: QueryStatus.uninitialized,
    saving: QueryStatus.uninitialized
};
export const createDefaultListActions = (prefix) => {
    return {
        setPage: createAction(`${prefix}/setPage`),
        setRowsPerPage: createAction(`${prefix}/setRowsPerPage`),
        setSearch: createAction(`${prefix}/setSearch`),
        toggleShowInactive: createAction(`${prefix}/toggleShowInactive`),
        setSort: createAction(`${prefix}/setSort`)
    };
};
//# sourceMappingURL=redux-utils.js.map