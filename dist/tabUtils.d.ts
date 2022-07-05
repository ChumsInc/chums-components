import { Tab } from './TabItem';
export interface PartialTab extends Partial<Tab> {
    id: string;
}
export interface TabsState {
    tabs: Tab[];
    current: string | null;
}
export declare type TabsActionType = {
    type: 'add';
    payload: Tab | Tab[];
} | {
    type: 'select';
    payload: string;
} | {
    type: 'update';
    payload: PartialTab | PartialTab[];
} | {
    type: 'remove';
    payload: string;
};
export declare const initialTabState: TabsState;
export declare function tabsReducer(state: TabsState, action: TabsActionType): TabsState;
