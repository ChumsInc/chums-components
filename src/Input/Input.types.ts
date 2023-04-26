import {InputHTMLAttributes, RefObject} from "react";

export interface InputProps extends InputHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg',
    myRef?: RefObject<HTMLInputElement>,
    fuzzyList?: boolean
}
