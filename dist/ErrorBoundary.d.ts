import React, { Component, ReactNode } from 'react';
export interface ErrorBoundaryProps {
    children: ReactNode;
}
export interface ErrorBoundaryState {
    hasError: boolean;
    componentStack: string;
    message: string;
}
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
    render(): string | number | boolean | React.ReactFragment | JSX.Element | null | undefined;
}
