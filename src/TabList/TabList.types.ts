import {Tab} from "../types";
import React, {HTMLAttributes} from "react";
import {NavAlign, NavFill, NavVariant} from "../NavList";
import {Argument} from "classnames";

export type TabVariant = 'tabs' | 'pills' | 'underline';
export type TabAlign = 'center' | 'end' | 'start';
export type TabFill = 'fill' | 'justified';

export interface TabListProps<T = HTMLUListElement> extends HTMLAttributes<T> {
    tabs?: Tab[];
    currentTabId?: string;
    className?: string;
    itemClassName?: string |((tab:Tab) => string|Argument);
    onSelectTab?: (tab: Tab) => void;
    onCloseTab?: (tab: Tab) => void;
    variant?: NavVariant;
    align?: NavAlign;
    vertical?: boolean;
    fill?: NavFill;
    children?: React.ReactNode;
}

