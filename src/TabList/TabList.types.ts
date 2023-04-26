import {Tab} from "../types";
import React from "react";

export interface TabListProps {
    tabs?: Tab[],
    currentTabId?: string,
    className?: string,
    itemClassName?: string,
    onSelectTab?: (tab: Tab) => void,
    onCloseTab?: (tab: Tab) => void,
    children?: React.ReactNode,
}

