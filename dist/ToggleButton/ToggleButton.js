"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
exports.default = react_1.default.forwardRef(function ToggleButton({ id, type = 'checkbox', checked, color = 'primary', size, className, onChange, disabled, children, }, ref) {
    const buttonId = id ?? (0, react_1.useId)();
    const btnClassName = (0, classnames_1.default)(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-outline-${color}`]: !!color && !checked,
        [`btn-${color}`]: !!color && checked,
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: type, className: "btn-check", id: buttonId, autoComplete: "off", ref: ref, onChange: onChange, checked: checked, disabled: disabled }), (0, jsx_runtime_1.jsx)("label", { htmlFor: buttonId, className: btnClassName, children: children })] }));
});
//# sourceMappingURL=ToggleButton.js.map