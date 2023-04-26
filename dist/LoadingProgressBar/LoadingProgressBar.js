import { jsx as _jsx } from "react/jsx-runtime";
import { default as Progress } from "../Progress/Progress";
import { default as ProgressBar } from "../ProgressBar/ProgressBar";
const LoadingProgress = ({ height, className, style, color = 'primary', value = 100, valueMin = 0, valueMax = 100, striped, animated, children }) => {
    return (_jsx(Progress, { height: height, className: className, style: style, children: _jsx(ProgressBar, { color: color, value: value, valueMin: valueMin, valueMax: valueMax, striped: striped, animated: animated, children: children }) }));
};
export default LoadingProgress;
//# sourceMappingURL=LoadingProgressBar.js.map