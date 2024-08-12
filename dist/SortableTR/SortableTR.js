"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils/utils");
/**
 * @deprecated - use DataTableRow instead - the table row is the sorted item, not the sortable container
 */
const SortableTR = ({ className, rowClassName, selected, fields, row, trRef, onClick = utils_1.noop, ...rest }) => {
    (0, react_1.useEffect)(() => {
        console.log('Deprecation Notice: SortableTR is deprecated, use DataTableRow instead.');
    }, []);
    const clickHandler = () => {
        return onClick ? onClick() : (0, utils_1.noop)();
    };
    const _className = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;
    return ((0, jsx_runtime_1.jsx)("tr", { ref: trRef, className: (0, classnames_1.default)({ 'table-active': selected }, className, _className), onClick: clickHandler, ...rest, children: fields.map((field, index) => {
            const fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
            if (typeof field.render === 'function') {
                return ((0, jsx_runtime_1.jsx)("td", { className: (0, classnames_1.default)({ [`text-${field.align}`]: !!field.align }, fieldClassName), colSpan: field.colSpan, children: field.render(row) }, index));
            }
            return ((0, jsx_runtime_1.jsx)("td", { className: (0, classnames_1.default)({ [`text-${field.align}`]: !!field.align }, fieldClassName), colSpan: field.colSpan, children: row?.[field.field] }, index));
        }) }));
};
exports.default = SortableTR;
//# sourceMappingURL=SortableTR.js.map