"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
/**
 * @deprecated Prefer react-bootstrap/InputGroup instead
 */
const InputGroup = ({ bsSize, className, children }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('input-group', { [`input-group-${bsSize}`]: !!bsSize }, className), children: children }));
};
exports.default = InputGroup;
//# sourceMappingURL=InputGroup.js.map