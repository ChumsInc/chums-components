import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { noop } from "./utils";
/**
 * @deprecated - use DataTableRow instead - the table row is the sorted item, not the sortable container
 * @param className
 * @param rowClassName
 * @param selected
 * @param fields
 * @param row
 * @param trRef
 * @param onClick
 * @param rest
 * @constructor
 */
const SortableTR = ({ className, rowClassName, selected, fields, row, trRef, onClick = noop, ...rest }) => {
    const clickHandler = () => {
        return onClick ? onClick() : noop();
    };
    const _className = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;
    return (_jsx("tr", { ref: trRef, className: classNames({ 'table-active': selected }, className, _className), onClick: clickHandler, ...rest, children: fields.map((field, index) => {
            const fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
            if (typeof field.render === 'function') {
                return (_jsx("td", { className: classNames({ [`text-${field.align}`]: !!field.align }, fieldClassName), colSpan: field.colSpan, children: field.render(row) }, index));
            }
            return (_jsx("td", { className: classNames({ [`text-${field.align}`]: !!field.align }, fieldClassName), colSpan: field.colSpan, children: row[field.field] }, index));
        }) }));
};
export default SortableTR;
//# sourceMappingURL=SortableTR.js.map