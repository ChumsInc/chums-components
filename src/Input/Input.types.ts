import {InputHTMLAttributes, RefObject} from "react";

export interface InputProps<T = unknown> extends InputHTMLAttributes<T> {
    bsSize?: 'sm' | 'lg',
    myRef?: RefObject<HTMLInputElement>,
    fuzzyList?: boolean
}
