import React from "react";
import { Tab } from "./TabItem";
export declare const StyledTabList: import("styled-components").StyledComponent<"ul", any, {}, never>;
export interface TabListProps {
    tabs: Tab[];
    currentTabId: string;
    className?: string;
    itemClassName?: string;
    onSelectTab: (tab: Tab) => void;
    onCloseTab?: (tab: Tab) => void;
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<TabListProps>;
export default _default;
