"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils/utils");
const CurrentPageButton = ({ page, label = null }) => {
    return ((0, jsx_runtime_1.jsx)("li", { className: (0, classnames_1.default)('page-item active'), children: (0, jsx_runtime_1.jsx)("span", { className: "page-link", children: label ?? (0, utils_1.commaFormatter)(page) }) }));
};
exports.default = CurrentPageButton;
//# sourceMappingURL=CurrentPageButton.js.map