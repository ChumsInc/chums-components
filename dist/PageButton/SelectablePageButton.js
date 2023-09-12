"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils/utils");
const SelectablePageButton = ({ page, label = null, disabled = false, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        if (onClick) {
            onClick(page);
        }
    };
    return ((0, jsx_runtime_1.jsx)("li", { className: (0, classnames_1.default)('page-item', { disabled: disabled }), children: (0, jsx_runtime_1.jsx)("a", { href: "#", className: 'page-link', onClick: handleClick, children: label || (0, utils_1.commaFormatter)(page) }) }));
};
exports.default = SelectablePageButton;
//# sourceMappingURL=SelectablePageButton.js.map