import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import TabItem from "../TabItem";
import styled from "styled-components";
import { noop } from "../utils/utils";
const StyledTabList = styled.ul `
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
const TabList = ({ tabs, currentTabId, className, itemClassName, onSelectTab = noop, onCloseTab, children }) => {
    const closeHandler = (tab) => {
        if (!!onCloseTab) {
            onCloseTab(tab);
        }
    };
    return (_jsxs(StyledTabList, { className: classNames('nav nav-tabs', className), children: [tabs?.map(tab => (_jsx(TabItem, { id: tab.id, title: tab.title, className: itemClassName, icon: tab.icon, onSelect: () => onSelectTab(tab), disabled: tab.disabled, active: tab.id === currentTabId, canClose: tab.canClose && !!onCloseTab, onClose: () => closeHandler(tab) }, tab.id))), children] }));
};
export default TabList;
//# sourceMappingURL=TabList.js.map