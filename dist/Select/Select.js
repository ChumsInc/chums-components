import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const Select = ({ bsSize, className, children, ...rest }) => {
    const selectClassName = {
        [`form-select-${bsSize}`]: !!bsSize
    };
    return (_jsx("select", { className: classNames("form-select", selectClassName, className), ...rest, children: children }));
};
export default Select;
//# sourceMappingURL=Select.js.map