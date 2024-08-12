import React, { HTMLAttributes } from "react";
import { Tab } from "../types";
import classNames from "classnames";
import { TabAlign, TabFill, TabVariant } from "../TabList";
export type NavVariant = TabVariant;
export type NavAlign = TabAlign;
export type NavFill = TabFill;
export interface NavListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onChange'> {
    items: NavItemElement[];
    currentTab: string;
    onChange: (id: string) => void;
    onClose?: (id: string) => void;
    variant?: NavVariant;
    align?: NavAlign;
    vertical?: boolean;
    fill?: NavFill;
    justify?: boolean;
}
export type NavItemElement = Tab & Omit<HTMLAttributes<HTMLLIElement>, 'onSelect' | 'className' | 'title'>;
export interface NavItemProps extends NavItemElement {
    active?: boolean;
    className?: string | classNames.Argument;
    disabled?: boolean;
    element?: React.ReactNode;
    onSelect?: (id: string) => void;
    onClose?: (id: string) => void;
}
