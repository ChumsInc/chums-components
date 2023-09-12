"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRowsPerPageValues = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
exports.defaultRowsPerPageValues = [10, 25, 50, 100, 250, 500, 1000];
const RowsPerPage = ({ value, pageValues = exports.defaultRowsPerPageValues, bsSize, className, onChange, ...rest }) => {
    const changeHandler = (ev) => onChange(Number(ev.target.value));
    const selectClassName = className ?? (0, classnames_1.default)('form-select', { [`form-select-${bsSize}`]: !!bsSize });
    return ((0, jsx_runtime_1.jsx)("select", { value: value, onChange: changeHandler, className: selectClassName, ...rest, children: pageValues.map(value => ((0, jsx_runtime_1.jsx)("option", { value: value, children: value }, value))) }));
};
exports.default = RowsPerPage;
//# sourceMappingURL=RowsPerPage.js.map