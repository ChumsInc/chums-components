import { jsx as _jsx } from "react/jsx-runtime";
import SortableTH from "./SortableTH";
const SortableTableHead = ({ currentSort, fields, onChangeSort, }) => {
    const { field, ascending } = currentSort;
    return (_jsx("thead", { children: _jsx("tr", { children: fields.map((tableField, index) => (_jsx(SortableTH, { field: tableField, sorted: field === tableField.field, ascending: ascending, className: tableField.className, onClick: onChangeSort }, index))) }) }));
};
export default SortableTableHead;
//# sourceMappingURL=SortableTableHead.js.map