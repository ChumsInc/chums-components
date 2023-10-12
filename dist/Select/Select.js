"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Select = ({ bsSize, className, children, ...rest }) => {
    const selectClassName = {
        [`form-select-${bsSize}`]: !!bsSize
    };
    return ((0, jsx_runtime_1.jsx)("select", { className: (0, classnames_1.default)("form-select", selectClassName, className), ...rest, children: children }));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map