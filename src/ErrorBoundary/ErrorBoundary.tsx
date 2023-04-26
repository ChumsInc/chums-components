import React, {Component, ReactNode} from 'react';
import Alert from "../Alert/Alert";
import {ErrorBoundaryProps, ErrorBoundaryState} from "./ErrorBoundary.types";

/**
 * @deprecated Use react-error-boundary instead.
 */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state = {
        hasError: false,
        componentStack: '',
        message: '',
    }

    constructor(props:any) {
        super(props);
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error:Error, errorInfo:any) {
        this.setState({componentStack: errorInfo.componentStack, message: error.message});
    }

    render() {
        const {hasError, componentStack, message} = this.state;
        if (hasError) {
            return (
                <>
                    <h1>Sorry! something went wrong!</h1>
                    <Alert color="danger">{message}</Alert>
                    <code className="pre">
                        <pre style={{whiteSpace: 'pre-wrap'}}>
                            {componentStack}
                        </pre>
                    </code>
                </>
            )
        }
        return this.props.children;
    }
}
