"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TabItem_1 = __importDefault(require("../TabItem"));
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("../utils/utils");
const StyledTabList = styled_components_1.default.ul `
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
const TabList = ({ tabs, variant, vertical, align, fill, currentTabId, className, itemClassName, onSelectTab = utils_1.noop, onCloseTab, children, ...rest }) => {
    const closeHandler = (tab) => {
        if (onCloseTab) {
            onCloseTab(tab);
        }
    };
    const tabClassName = {
        'justify-content-center': align === 'center',
        'justify-content-end': align === 'end',
        'flex-column': vertical,
        'nav-tabs': variant === 'tabs',
        'nav-pills': variant === 'pills',
        'nav-underline': variant === 'underline',
        'nav-fill': fill === 'fill',
        'nav-justified': fill === 'justified',
    };
    return ((0, jsx_runtime_1.jsxs)(StyledTabList, { className: (0, classnames_1.default)('nav', tabClassName, className), ...rest, children: [tabs?.map(tab => ((0, jsx_runtime_1.jsx)(TabItem_1.default, { id: tab.id, title: tab.title, className: itemClassName, icon: tab.icon, onSelect: () => onSelectTab(tab), disabled: tab.disabled, active: tab.id === currentTabId, canClose: tab.canClose && !!onCloseTab, onClose: () => closeHandler(tab) }, tab.id))), children] }));
};
exports.default = TabList;
//# sourceMappingURL=TabList.js.map