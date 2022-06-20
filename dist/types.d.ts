import { ReactNode } from "react";
export declare type BootstrapColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'body';
export declare type BootstrapBGColor = BootstrapColor | 'transparent';
export declare type BootstrapTextColor = BootstrapColor | 'muted' | 'white' | 'black-50' | 'white-50';
export declare type BootstrapButtonColor = BootstrapColor | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark';
export interface BasicAlert {
    title?: string;
    message?: string;
    context?: string;
    color?: BootstrapColor;
    className?: string | object;
    canDismiss?: boolean;
}
export declare type BootstrapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type BootstrapButtonSize = 'xs' | 'sm' | 'lg';
export interface InputField {
    field: string;
    value: string | number | boolean;
}
export declare type BootstrapFlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export interface SortableTableField {
    field: string;
    title: ReactNode | string;
    sortable?: boolean;
    render?: (row: any) => ReactNode | string | number;
    className?: string | object | ((any: any) => string | object);
    colSpan?: number;
}
export interface SortProps {
    field: string;
    ascending: boolean;
}