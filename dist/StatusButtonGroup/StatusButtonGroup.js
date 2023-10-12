"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const StatusButtonGroup = ({ checked, enabledText, disabledText, onChange }) => {
    const btnEnabled = {
        'btn-success': checked,
        'btn-outline-success': !checked,
    };
    const btnDisabled = {
        'btn-danger': !checked,
        'btn-outline-danger': checked,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "btn-group btn-group-sm", role: "group", children: [(0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => onChange(true), className: (0, classnames_1.default)('btn btn-sm', btnEnabled), children: enabledText ?? 'Enabled' }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => onChange(false), className: (0, classnames_1.default)('btn btn-sm', btnDisabled), children: disabledText ?? 'Disabled' })] }));
};
exports.default = StatusButtonGroup;
//# sourceMappingURL=StatusButtonGroup.js.map