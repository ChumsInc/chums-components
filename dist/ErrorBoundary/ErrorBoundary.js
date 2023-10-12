"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Alert_1 = __importDefault(require("../Alert/Alert"));
/**
 * @deprecated Use react-error-boundary instead.
 */
class ErrorBoundary extends react_1.Component {
    state = {
        hasError: false,
        componentStack: '',
        message: '',
    };
    constructor(props) {
        super(props);
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ componentStack: errorInfo.componentStack, message: error.message });
    }
    render() {
        const { hasError, componentStack, message } = this.state;
        if (hasError) {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Sorry! something went wrong!" }), (0, jsx_runtime_1.jsx)(Alert_1.default, { color: "danger", children: message }), (0, jsx_runtime_1.jsx)("code", { className: "pre", children: (0, jsx_runtime_1.jsx)("pre", { style: { whiteSpace: 'pre-wrap' }, children: componentStack }) })] }));
        }
        return this.props.children;
    }
}
exports.default = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map