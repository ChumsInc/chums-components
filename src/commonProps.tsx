export type ColorType =
    'primary'
    | 'success'
    | 'info'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'light'
    | 'dark'
    | string;

export type ButtonColorType =
    ColorType
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';

export type TextColorType =
    ColorType
    | 'white'
    | 'muted';
