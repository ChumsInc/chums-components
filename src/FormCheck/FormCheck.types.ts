import React, {InputHTMLAttributes} from "react";

export interface FormCheckProps extends InputHTMLAttributes<any> {
    type: 'radio' | 'checkbox';
    id?: string;
    label?: string;
    checked: boolean;
    inline?: boolean;
    children?: React.ReactNode;
}
