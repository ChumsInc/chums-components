import { Tab, TabsState } from "../types";
export type TabsActionType<T extends Tab = Tab> = {
    type: 'add';
    payload: T | T[];
} | {
    type: 'select';
    payload: string;
} | {
    type: 'update';
    payload: Partial<T> | Partial<T>[];
} | {
    type: 'remove';
    payload: string;
};
export declare const initialTabState: TabsState;
export declare function tabsReducer<T extends Tab = Tab>(state: TabsState<T & Tab>, action: TabsActionType<T>): TabsState<T>;
