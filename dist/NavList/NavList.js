import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import NavItem from "./NavItem";
export default function NavList({ variant, vertical, align, fill, items, currentTab, onChange, onClose, className, ...rest }) {
    const navClassName = {
        'justify-content-center': align === 'center',
        'justify-content-end': align === 'end',
        'flex-column': vertical,
        'nav-tabs': variant === 'tabs',
        'nav-pills': variant === 'pills',
        'nav-underline': variant === 'underline',
        'nav-fill': fill === 'fill',
        'nav-justified': fill === 'justified',
    };
    return (_jsx("ul", { className: classNames('nav', navClassName, className), ...rest, children: items.map(item => _jsx(NavItem, { ...item, active: currentTab === item.id, onSelect: onChange, onClose: onClose }, item.id)) }));
}
//# sourceMappingURL=NavList.js.map