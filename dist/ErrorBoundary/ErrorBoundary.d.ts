import React, { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";
/**
 * @deprecated Use react-error-boundary instead.
 */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: {
        hasError: boolean;
        componentStack: string;
        message: string;
    };
    constructor(props: any);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: any): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
