import React from "react";
import classNames from "classnames";
import TabItem from "../TabItem";
import styled from "styled-components";
import {noop} from "../utils/utils";
import {TabListProps} from "./TabList.types";
import {Tab} from "../types";


const StyledTabList = styled.ul`
  &.nav-tabs {
    .nav-item {
      .nav-link {
        .btn-close {
          width: 0.75rem;
          height: 0.75rem;
          margin-left: 0.25rem;
          line-height: 0.75rem;
          font-size: 0.75rem;
        }
      }
    }
  }
`;

const TabList = ({
                     tabs,
                     currentTabId,
                     className,
                     itemClassName,
                     onSelectTab = noop,
                     onCloseTab,
                     children
                 }: TabListProps) => {
    const closeHandler = (tab: Tab) => {
        if (!!onCloseTab) {
            onCloseTab(tab);
        }
    }
    return (
        <StyledTabList className={classNames('nav nav-tabs', className)}>
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

export default TabList;
