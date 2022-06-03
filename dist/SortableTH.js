import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
const SortableTH = ({ field, sorted, ascending, className, onClick }) => {
    if (!field.sortable) {
        return (_jsx("th", { className: classNames(className), children: field.title }));
    }
    const iconClassName = {
        'bi-sort-down': !!sorted && !!ascending,
        'bi-sort-up': !!sorted && !ascending,
    };
    const clickHandler = () => {
        onClick({ field: field.field, ascending: !sorted ? true : !ascending });
    };
    return (_jsxs("th", { className: classNames("sortable", className), onClick: clickHandler, children: [field.title, !!sorted && (_jsx("span", { className: classNames('ms-1', iconClassName) }))] }));
};
export default SortableTH;
//# sourceMappingURL=SortableTH.js.map