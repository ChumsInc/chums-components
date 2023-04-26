import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const InputGroup = ({ bsSize, className, children }) => {
    return (_jsx("div", { className: classNames('input-group', { [`input-group-${bsSize}`]: !!bsSize }, className), children: children }));
};
export default InputGroup;
//# sourceMappingURL=InputGroup.js.map