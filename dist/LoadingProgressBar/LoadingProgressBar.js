"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Progress_1 = __importDefault(require("../Progress/Progress"));
const ProgressBar_1 = __importDefault(require("../ProgressBar/ProgressBar"));
const LoadingProgress = ({ height, className, style, color = 'primary', value = 100, valueMin = 0, valueMax = 100, striped, animated, children }) => {
    return ((0, jsx_runtime_1.jsx)(Progress_1.default, { height: height, className: className, style: style, children: (0, jsx_runtime_1.jsx)(ProgressBar_1.default, { color: color, value: value, valueMin: valueMin, valueMax: valueMax, striped: striped, animated: animated, children: children }) }));
};
exports.default = LoadingProgress;
//# sourceMappingURL=LoadingProgressBar.js.map