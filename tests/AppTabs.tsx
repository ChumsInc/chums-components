import React, {useState} from 'react';
import {Tab, TabList} from "../src";

export const tab1:Tab = {
    id: 'tab-1',
    title: 'Tab 1',
    icon: 'bi-binoculars-fill',
    canClose: false,
    disabled: false,
}

export const tab2:Tab = {
    id: 'tab-2',
    title: 'Tab 2',
    icon: 'bi-boombox-fill',
    canClose: false,
    disabled: false,
}

export const tab3:Tab = {
    id: 'tab-3',
    title: 'Tab 3',
    icon: 'bi-bicycle',
    canClose: true,
    disabled: false,
}

export const addTab:Tab = {
    id: 'tab-adder',
    title: <span className="bi-plus-circle"/>,
    canClose: false,
    disabled: false,
}


const tabList:Tab[] = [tab1, tab2, addTab];

export interface AppTabsProps {
    currentTabID: string,
    onSelectTab: (tabID:string) => void,
}
const AppTabs:React.FC<AppTabsProps> = ({currentTabID, onSelectTab}) => {
    const [tabs, setTabs] = useState(tabList);

    const tabSelectHandler = (tab:Tab) => {
        if (tab.id === addTab.id) {
            setTabs([tab1, tab2, tab3, {...addTab, disabled: true}]);
            return onSelectTab(tab3.id)
        }
        onSelectTab(tab.id);
    }

    const tabCloseHandler = (tab:Tab) => {
        if (tab.id === tab3.id) {
            setTabs([tab1, tab2, {...addTab, disabled: false}]);
            onSelectTab(tab1.id);
        }
        onSelectTab(tab.id);
    }

    return (
        <TabList tabs={tabs} currentTabId={currentTabID}
                 onSelectTab={tabSelectHandler}
                 onCloseTab={tabCloseHandler}
        />
    )
}


export default AppTabs;
