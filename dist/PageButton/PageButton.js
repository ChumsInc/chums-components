"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CurrentPageButton_1 = __importDefault(require("./CurrentPageButton"));
const SelectablePageButton_1 = __importDefault(require("./SelectablePageButton"));
/**
 * @deprecated prefer TablePagination or react-bootstrap/Pagination instead
 */
const PageButton = ({ page, label = '', disabled = false, isCurrent = false, onClick }) => {
    return (isCurrent
        ? (0, jsx_runtime_1.jsx)(CurrentPageButton_1.default, { page: page, label: label })
        : (0, jsx_runtime_1.jsx)(SelectablePageButton_1.default, { page: page, label: label, disabled: disabled, onClick: onClick }));
};
exports.default = PageButton;
//# sourceMappingURL=PageButton.js.map