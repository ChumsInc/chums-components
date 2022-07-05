import {Tab} from './TabItem';

export interface PartialTab extends Partial<Tab> {
    id: string,
}

export interface TabsState {
    tabs: Tab[],
    current: string | null
}

const tabAdder = (newTabs:Tab|Tab[]) => (state:TabsState):TabsState => {
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

const tabRemover = (id:string) => (state:TabsState):TabsState => {
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

const tabUpdater = (partials:PartialTab|PartialTab[]) => (state:TabsState) => {
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



const modifyTabSet = (state: TabsState, tabsModifier: (state:TabsState) => TabsState): TabsState => {
    let {tabs, current} = tabsModifier(state);
    if (tabs.filter(t => t.id === current && t.disabled).length === 0) {
       current = tabs[0]?.id || null;
    }
    return {
        tabs,
        current,
    }
}

export type TabsActionType =
    | { type: 'add', payload: Tab|Tab[] }
    | { type: 'update', payload: PartialTab|PartialTab[] }
    | { type: 'remove', payload: string};


export const initialTabState: TabsState = {
    tabs: [],
    current: null,
};

export function tabsReducer(state: TabsState, action:TabsActionType) {
    switch (action.type) {
    case 'add':
        return modifyTabSet(state, tabAdder(action.payload));
    case 'update':
        return modifyTabSet(state, tabUpdater(action.payload));
    case 'remove':
        return modifyTabSet(state, tabRemover(action.payload));
    }
    return state;
}

