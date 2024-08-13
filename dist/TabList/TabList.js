"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const TabItem_1 = __importDefault(require("../TabItem"));
const utils_1 = require("../utils/utils");
const StyledTabList_1 = __importDefault(require("./StyledTabList"));
const getTabClassName = ({ align, vertical, variant = 'tabs', fill }) => ({
    'justify-content-center': align === 'center',
    'justify-content-end': align === 'end',
    'flex-column': vertical,
    'nav-tabs': variant === 'tabs',
    'nav-pills': variant === 'pills',
    'nav-underline': variant === 'underline',
    'nav-fill': fill === 'fill',
    'nav-justified': fill === 'justified',
});
function TabList({ tabs, variant, vertical, align, fill, currentTabId, className, itemClassName, onSelectTab = utils_1.noop, onCloseTab, children, ...rest }) {
    const [tabClassName, setTabClassName] = (0, react_1.useState)(getTabClassName({
        variant,
        align,
        vertical,
        fill
    }));
    (0, react_1.useEffect)(() => {
        setTabClassName(getTabClassName({ variant, align, vertical, fill }));
    }, [variant, align, vertical, fill]);
    const closeHandler = (tab) => {
        if (onCloseTab) {
            onCloseTab(tab);
        }
    };
    const _className = (0, classnames_1.default)('nav', tabClassName, className);
    console.log(tabClassName, className, _className);
    return ((0, jsx_runtime_1.jsxs)(StyledTabList_1.default, { className: _className, ...rest, children: [tabs?.map(tab => ((0, jsx_runtime_1.jsx)(TabItem_1.default, { id: tab.id, title: tab.title, className: itemClassName, icon: tab.icon, onSelect: () => onSelectTab(tab), disabled: tab.disabled, active: tab.id === currentTabId, canClose: tab.canClose && !!onCloseTab, onClose: () => closeHandler(tab) }, tab.id))), children] }));
}
//# sourceMappingURL=TabList.js.map