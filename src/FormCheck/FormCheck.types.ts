import React from "react";

export interface FormCheckProps extends React.ComponentProps<"input"> {
    type: 'radio' | 'checkbox';
    id?: string;
    label?: string;
    checked: boolean;
    inline?: boolean;
    children?: React.ReactNode;
}
