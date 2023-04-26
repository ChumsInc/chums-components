import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { commaFormatter } from "../utils/utils";
const CurrentPageButton = ({ page, label = null }) => {
    return (_jsx("li", { className: classNames('page-item active'), children: _jsx("span", { className: "page-link", children: label ?? commaFormatter(page) }) }));
};
export default CurrentPageButton;
//# sourceMappingURL=CurrentPageButton.js.map