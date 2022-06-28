import React from 'react';
export interface FormCheckProps extends React.HTMLAttributes<HTMLInputElement> {
    id?: string;
    label: string;
    checked: boolean;
    inline?: boolean;
    type: 'radio' | 'checkbox';
}
declare const FormCheck: React.FC<FormCheckProps>;
export default FormCheck;
