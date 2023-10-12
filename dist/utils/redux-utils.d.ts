import { QueryStatus } from "@reduxjs/toolkit/query";
import { SortProps } from "../types";
export interface ListState<T = any> {
    values: T[];
    loading: QueryStatus;
    loaded: boolean;
    search: string;
    showInactive: boolean;
    page: number;
    rowsPerPage: number;
    sort: SortProps<T>;
}
export interface CurrentValueState<T = any> {
    value: T | null;
    loading: QueryStatus;
    saving: QueryStatus;
}
export declare const initialListState: Omit<ListState, 'sort'>;
export declare const initialCurrentValueState: CurrentValueState;
export declare const createDefaultListActions: <T = any>(prefix: string) => {
    setPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>;
    setRowsPerPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>;
    setSearch: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
    toggleShowInactive: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<boolean | undefined, string>;
    setSort: import("@reduxjs/toolkit").ActionCreatorWithPayload<SortProps<T>, string>;
};
