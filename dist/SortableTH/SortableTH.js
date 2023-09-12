"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const DataTableTH_1 = __importDefault(require("../DataTableTH"));
const SortableTH = ({ field, sorted, ascending, className, onClick }) => {
    if (!field.sortable) {
        return ((0, jsx_runtime_1.jsx)(DataTableTH_1.default, { field: field, className: className }));
    }
    const thClassName = (0, classnames_1.default)({ [`text-${field.align}`]: !!field.align }, className);
    const clickHandler = () => {
        onClick({ field: field.field, ascending: !sorted ? true : !ascending });
    };
    const iconClassName = {
        'bi-arrow-down': !!sorted && !!ascending,
        'bi-arrow-up': !!sorted && !ascending,
    };
    return ((0, jsx_runtime_1.jsxs)("th", { className: (0, classnames_1.default)("sortable", thClassName), onClick: clickHandler, children: [!!sorted && ((0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)('me-1', iconClassName) })), field.title] }));
};
exports.default = SortableTH;
//# sourceMappingURL=SortableTH.js.map