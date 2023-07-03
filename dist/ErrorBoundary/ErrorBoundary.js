import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import Alert from "../Alert/Alert";
/**
 * @deprecated Use react-error-boundary instead.
 */
export default class ErrorBoundary extends Component {
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
            return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Sorry! something went wrong!" }), _jsx(Alert, { color: "danger", children: message }), _jsx("code", { className: "pre", children: _jsx("pre", { style: { whiteSpace: 'pre-wrap' }, children: componentStack }) })] }));
        }
        return this.props.children;
    }
}
//# sourceMappingURL=ErrorBoundary.js.map