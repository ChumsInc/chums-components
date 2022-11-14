import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
const SortableTH = ({ field, sorted, ascending, className, onClick }) => {
    const thClassName = classNames({ [`text-${field.align}`]: !!field.align }, className);
    if (!field.sortable) {
        return (_jsx("th", { className: thClassName, children: field.title }));
    }
    const clickHandler = () => {
        onClick({ field: field.field, ascending: !sorted ? true : !ascending });
    };
    const iconClassName = {
        'bi-arrow-down': !!sorted && !!ascending,
        'bi-arrow-up': !!sorted && !ascending,
    };
    return (_jsxs("th", { className: classNames("sortable", thClassName), onClick: clickHandler, children: [!!sorted && (_jsx("span", { className: classNames('me-1', iconClassName) })), field.title] }));
};
export default SortableTH;
//# sourceMappingURL=SortableTH.js.map