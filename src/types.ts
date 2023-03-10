import {ReactNode} from "react";
import classNames, {ArgumentArray} from 'classnames'

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

export type DataTableClassNames<T = any> = string | classNames.ArgumentArray | ((row: T) => string | classNames.ArgumentArray);

export interface DataTableField<T = any> {
    id?: number|string;
    field: keyof T,
    title: ReactNode,
    align?: 'start'|'center'|'end';
    render?: (row:T) => ReactNode,
    className?: DataTableClassNames<T>,
    colSpan?: number,
}

export interface SortableTableField<T = any> extends DataTableField<T> {
    sortable?: boolean,
}

export interface SortProps<T = any> {
    field: keyof T|'key',
    ascending: boolean,
}
