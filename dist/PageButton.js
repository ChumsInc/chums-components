import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { commaFormatter } from "./utils";
const CurrentPageButton = ({ page, label = null }) => {
    return (_jsx("li", { className: classNames('page-item active'), children: _jsx("span", { className: "page-link", children: label || commaFormatter(page) }) }));
};
const SelectablePageButton = ({ page, label = null, disabled = false, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        if (onClick) {
            onClick(page);
        }
    };
    return (_jsx("li", { className: classNames('page-item', { disabled: disabled }), children: _jsx("a", { href: "#", className: 'page-link', onClick: handleClick, children: label || commaFormatter(page) }) }));
};
const PageButton = ({ page, label = '', disabled = false, isCurrent = false, onClick }) => {
    return (isCurrent
        ? _jsx(CurrentPageButton, { page: page, label: label })
        : _jsx(SelectablePageButton, { page: page, label: label, disabled: disabled, onClick: onClick }));
};
export default PageButton;
//# sourceMappingURL=PageButton.js.map