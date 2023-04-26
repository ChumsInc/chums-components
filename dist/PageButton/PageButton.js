import { jsx as _jsx } from "react/jsx-runtime";
import CurrentPageButton from "./CurrentPageButton";
import SelectablePageButton from "./SelectablePageButton";
const PageButton = ({ page, label = '', disabled = false, isCurrent = false, onClick }) => {
    return (isCurrent
        ? _jsx(CurrentPageButton, { page: page, label: label })
        : _jsx(SelectablePageButton, { page: page, label: label, disabled: disabled, onClick: onClick }));
};
export default PageButton;
//# sourceMappingURL=PageButton.js.map