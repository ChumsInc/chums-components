import { jsx as _jsx } from "react/jsx-runtime";
import DataTableTH from "./DataTableTH";
import classNames from "classnames";
const DataTableHead = ({ fields, ...rest }) => {
    return (_jsx("thead", { ...rest, children: _jsx("tr", { children: fields.map((tableField, index) => (_jsx(DataTableTH, { field: tableField, className: classNames(typeof tableField.className === 'function'
                    ? { [`text-${tableField.align}`]: !!tableField.align }
                    : tableField.className) }, index))) }) }));
};
export default DataTableHead;
//# sourceMappingURL=DataTableHead.js.map