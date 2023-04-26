import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const DataTableTH = ({ field, className, }) => {
    const thClassName = classNames({ [`text-${field.align}`]: !!field.align }, className);
    return (_jsx("th", { className: thClassName, children: field.title }));
};
export default DataTableTH;
//# sourceMappingURL=DataTableTH.js.map