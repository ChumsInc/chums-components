import React, {useEffect, useState} from "react";
import classNames from "classnames";
import TabItem from "../TabItem";
import {noop} from "../utils/utils";
import {TabListProps} from "./TabList.types";
import {Tab} from "../types";
import StyledTabList from "./StyledTabList";

const getTabClassName = ({align, vertical, variant = 'tabs', fill}: {
    align?: string | null;
    vertical?: boolean;
    variant?: string | null;
    fill?: string | null;
}):classNames.Argument => ({
    'justify-content-center': align === 'center',
    'justify-content-end': align === 'end',
    'flex-column': vertical,
    'nav-tabs': variant === 'tabs',
    'nav-pills': variant === 'pills',
    'nav-underline': variant === 'underline',
    'nav-fill': fill === 'fill',
    'nav-justified': fill === 'justified',
})

export default function TabList({
                                    tabs,
                                    variant,
                                    vertical,
                                    align,
                                    fill,
                                    currentTabId,
                                    className,
                                    itemClassName,
                                    onSelectTab = noop,
                                    onCloseTab,
                                    children,
                                    ...rest
                                }: TabListProps) {

    const [tabClassName, setTabClassName] = useState<classNames.Argument>(getTabClassName({
        variant,
        align,
        vertical,
        fill
    }))

    useEffect(() => {
        setTabClassName(getTabClassName({variant, align, vertical, fill}));
    }, [variant, align, vertical, fill]);

    const closeHandler = (tab: Tab) => {
        if (onCloseTab) {
            onCloseTab(tab);
        }
    }

    const _className = classNames('nav', tabClassName, className);
    console.log(tabClassName, className, _className);
    return (
        <StyledTabList className={_className} {...rest}>
            {tabs?.map(tab => (
                <TabItem key={tab.id} id={tab.id} title={tab.title} className={itemClassName}
                         icon={tab.icon}
                         onSelect={() => onSelectTab(tab)}
                         disabled={tab.disabled}
                         active={tab.id === currentTabId}
                         canClose={tab.canClose && !!onCloseTab} onClose={() => closeHandler(tab)}/>
            ))}
            {children}
        </StyledTabList>
    )
}
