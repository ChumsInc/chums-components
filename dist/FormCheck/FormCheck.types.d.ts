import React, { InputHTMLAttributes } from "react";
export interface FormCheckProps<T = HTMLInputElement> extends InputHTMLAttributes<T> {
    type: 'radio' | 'checkbox';
    id?: string;
    label?: string;
    checked: boolean;
    inline?: boolean;
    children?: React.ReactNode;
}
