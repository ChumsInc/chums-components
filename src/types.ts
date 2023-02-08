import {ReactNode} from "react";
import {ArgumentArray} from 'classnames'

export type BootstrapColor = 'primary' | 'secondary' | 'success' | 'danger'
    | 'warning' | 'info' | 'light' | 'dark' | 'body' | 'custom';
export type BootstrapBGColor = BootstrapColor | 'transparent';
export type BootstrapTextColor = BootstrapColor | 'muted' | 'white' | 'black-50' | 'white-50';
export type BootstrapButtonColor = BootstrapColor | 'outline-primary' | 'outline-secondary' | 'outline-success'
    | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark'

export interface BasicAlert {
    title?: string,
    message?: string,
    context?: string,
    color?: BootstrapColor,
    className?: string | ArgumentArray,
    canDismiss?: boolean,
}

export interface ErrorAlert {
    id: number;
    context: string;
    message: string;
    count: number;
    color?: BootstrapColor;
}


export type BootstrapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BootstrapButtonSize = 'xs' | 'sm' | 'lg';


export interface InputField {
    field: string,
    value: string | number | boolean
}

export type BootstrapFlexAlign = 'start'|'end'|'center'|'baseline'|'stretch';

export interface SortableTableField<T = any> {
    id?: number|string;
    field: keyof T,
    title: ReactNode,
    sortable?: boolean,
    align?: 'start'|'center'|'end';
    render?: (row:T) => ReactNode,
    className?: string|ArgumentArray|((row:T) => string|ArgumentArray),
    colSpan?: number,
}

export interface SortProps<T = any> {
    field: keyof T,
    ascending: boolean,
}
