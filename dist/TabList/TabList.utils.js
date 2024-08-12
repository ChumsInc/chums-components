"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialTabState = void 0;
exports.tabsReducer = tabsReducer;
const tabAdder = (newTabs) => (state) => {
    const { current } = state;
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
    };
};
const tabRemover = (id) => (state) => {
    let { current } = state;
    const [currentTab] = state.tabs.filter(t => t.id === id);
    if (currentTab?.id === id) {
        const tabs = state.tabs.filter(t => t.id !== id && !t.disabled);
        const currentTabIndex = state.tabs.findIndex(t => t.id === id);
        current = tabs[currentTabIndex]?.id || tabs[currentTabIndex - 1]?.id || null;
    }
    return {
        tabs: state.tabs.filter(t => t.id !== id),
        current
    };
};
const tabUpdater = (partials) => (state) => {
    const { current } = state;
    if (!Array.isArray(partials)) {
        return {
            tabs: state.tabs.map(t => ({ ...t, ...partials })),
            current,
        };
    }
    return {
        tabs: state.tabs.map(tab => {
            const [partial] = partials.filter(partial => partial.id === tab.id);
            if (!partial) {
                return tab;
            }
            return { ...tab, ...partial };
        }),
        current
    };
};
const modifyTabSet = (state, tabsModifier) => {
    const modifiedState = tabsModifier(state);
    if (modifiedState.tabs.filter(t => t.id === modifiedState.current && t.disabled).length === 0) {
        modifiedState.current = modifiedState.tabs[0]?.id || null;
    }
    return modifiedState;
};
exports.initialTabState = {
    tabs: [],
    current: null,
};
function tabsReducer(state, action) {
    switch (action.type) {
        case 'select':
            return {
                ...state,
                current: action.payload
            };
        case 'add':
            return modifyTabSet(state, tabAdder(action.payload));
        case 'update':
            return modifyTabSet(state, tabUpdater(action.payload));
        case 'remove':
            return modifyTabSet(state, tabRemover(action.payload));
    }
    return state;
}
//# sourceMappingURL=TabList.utils.js.map