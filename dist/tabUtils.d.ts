import { Tab } from './TabItem';
export interface TabType<T extends Tab = Tab> {
}
export interface PartialTab<T extends Tab = Tab> extends Partial<TabType<T>> {
    id: string;
}
export interface TabsState<T extends Tab = Tab> {
    tabs: T[];
    current: string | null;
}
export type TabsActionType<T extends Tab = Tab> = {
    type: 'add';
    payload: T | T[];
} | {
    type: 'select';
    payload: string;
} | {
    type: 'update';
    payload: PartialTab<T> | PartialTab<T>[];
} | {
    type: 'remove';
    payload: string;
};
export declare const initialTabState: TabsState;
export declare function tabsReducer<T extends Tab = Tab>(state: TabsState<T & Tab>, action: TabsActionType<T>): TabsState<T>;
