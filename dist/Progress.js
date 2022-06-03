import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const Progress = ({ height, className = '', style = {}, children }) => {
    if (height && !style.height) {
        style.height = height;
    }
    return (_jsx("div", { className: classNames('progress', className), style: style, children: children }));
};
export default Progress;
//# sourceMappingURL=Progress.js.map