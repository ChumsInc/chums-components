import {Tab} from './TabItem';

export interface TabType<T extends Tab = Tab> {}

export interface PartialTab<T extends Tab = Tab> extends Partial<TabType<T>> {
    id: string,
}

export interface TabsState<T extends Tab = Tab> {
    tabs: T[],
    current: string | null
}

const tabAdder = <T extends Tab = Tab>(newTabs: T | T[]) => (state: TabsState<T>): TabsState<T> => {
    let {current} = state;
    if (!Array.isArray(newTabs)) {
        newTabs = [newTabs];
    }
    const idsToAdd = newTabs.map(t => t.id);
    const tabs = [
        ...state.tabs.filter(t => !idsToAdd.includes(t.id)),
        ...newTabs,
    ];
    return {
        tabs,
        current
    }
}

const tabRemover = <T extends Tab = Tab>(id: string) => (state: TabsState<T>): TabsState<T> => {
    let {current} = state;
    const [currentTab] = state.tabs.filter(t => t.id === id);
    if (currentTab?.id === id) {
        const tabs = state.tabs.filter(t => t.id !== id && !t.disabled);
        let currentTabIndex = state.tabs.findIndex(t => t.id === id);
        current = tabs[currentTabIndex]?.id || tabs[currentTabIndex - 1]?.id || null;
    }
    return {
        tabs: state.tabs.filter(t => t.id !== id),
        current
    }
}

const tabUpdater = <T extends Tab = Tab>(partials: PartialTab<T> | PartialTab<T>[]) => (state: TabsState<T>):TabsState<T> => {
    let {current} = state;
    if (!Array.isArray(partials)) {
        return {
            tabs: state.tabs.map(t => ({...t, ...partials})),
            current,
        }
    }

    return {
        tabs: state.tabs.map(tab => {
            const [partial] = partials.filter(partial => partial.id === tab.id);
            if (!partial) {
                return tab;
            }
            return {...tab, ...partial}
        }),
        current
    }
}


const modifyTabSet = <T extends Tab = Tab>(state: TabsState<T>, tabsModifier: (state: TabsState<T>) => TabsState<T>): TabsState<T> => {
    let {tabs, current} = tabsModifier(state);
    if (tabs.filter(t => t.id === current && t.disabled).length === 0) {
        current = tabs[0]?.id || null;
    }
    return {
        tabs,
        current,
    }
}

export type TabsActionType<T extends Tab = Tab> =
    | { type: 'add', payload: T | T[] }
    | { type: 'select', payload: string }
    | { type: 'update', payload: PartialTab<T> | PartialTab<T>[] }
    | { type: 'remove', payload: string };


export const initialTabState: TabsState = {
    tabs: [],
    current: null,
};

export function tabsReducer<T extends Tab = Tab>(state: TabsState<T & Tab>, action: TabsActionType<T>):TabsState<T> {
    switch (action.type) {
    case 'select':
        return {
            ...state,
            current: action.payload
        }
    case 'add':
        return modifyTabSet<T>(state, tabAdder<T>(action.payload));
    case 'update':
        return modifyTabSet<T>(state, tabUpdater<T>(action.payload));
    case 'remove':
        return modifyTabSet<T>(state, tabRemover<T>(action.payload));
    }
    return state;
}

