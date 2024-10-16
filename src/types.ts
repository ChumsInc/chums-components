import {ReactNode} from "react";
import classNames from 'classnames'

export type BootstrapColor = 'primary' | 'secondary' | 'success' | 'danger'
    | 'warning' | 'info' | 'light' | 'dark' | 'body' | 'custom';
export type BootstrapBGColor = BootstrapColor | 'transparent';
export type BootstrapTextColor = BootstrapColor | 'muted' | 'white' | 'black-50' | 'white-50';
export type BootstrapButtonColor = BootstrapColor | 'outline-primary' | 'outline-secondary' | 'outline-success'
    | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark'


export type BootstrapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BootstrapButtonSize = 'xs' | 'sm' | 'lg';


export interface InputField {
    field: string,
    value: string | number | boolean
}

export type BootstrapFlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type DataTableClassNames<T = unknown> =
    string
    | classNames.Argument
    | ((row: T) => (string | classNames.Argument));

export interface DataTableField<T = unknown> {
    id?: number | string;
    field: keyof T,
    title: ReactNode,
    align?: 'start' | 'center' | 'end';
    render?: (row: T) => ReactNode,
    className?: DataTableClassNames<T>,
    colSpan?: number,
}

export interface SortableTableField<T = unknown> extends DataTableField<T> {
    sortable?: boolean,
}

export interface SortProps<T = unknown> {
    field: keyof T,
    ascending: boolean,
}


export interface Tab {
    id: string,
    title: string|ReactNode,

    /** Bootstrap icon className */
    icon?: string,

    canClose?: boolean,
    disabled?: boolean,
}

export interface TabsState<T extends Tab = Tab> {
    tabs: T[],
    current: string | null
}

export type TabProps = Tab;
