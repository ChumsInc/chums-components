import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const Spinner = ({ type, bsSize, role = 'status', hiddenLabel, color, className, ...rest }) => {
    const spinnerClassName = {
        'spinner-border': type === 'border',
        'spinner-grow': type === 'grow',
        [`spinner-border-${bsSize}`]: !!bsSize,
        [`text-${color}`]: !!color,
    };
    return (_jsx("div", { className: classNames(spinnerClassName, className), role: role, ...rest, children: !!hiddenLabel && (_jsx("span", { className: "visually-hidden", children: hiddenLabel })) }));
};
export default Spinner;
//# sourceMappingURL=Spinner.js.map