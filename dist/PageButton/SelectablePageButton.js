import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { commaFormatter } from "../utils/utils";
const SelectablePageButton = ({ page, label = null, disabled = false, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        if (onClick) {
            onClick(page);
        }
    };
    return (_jsx("li", { className: classNames('page-item', { disabled: disabled }), children: _jsx("a", { href: "#", className: 'page-link', onClick: handleClick, children: label || commaFormatter(page) }) }));
};
export default SelectablePageButton;
//# sourceMappingURL=SelectablePageButton.js.map