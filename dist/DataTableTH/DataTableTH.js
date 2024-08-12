"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataTableTH;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
function DataTableTH({ field, className, }) {
    const thClassName = (0, classnames_1.default)({ [`text-${field.align}`]: !!field.align }, className);
    return ((0, jsx_runtime_1.jsx)("th", { className: thClassName, children: field.title }));
}
//# sourceMappingURL=DataTableTH.js.map