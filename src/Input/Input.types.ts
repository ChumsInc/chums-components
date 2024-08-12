import {InputHTMLAttributes, RefObject} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    bsSize?: 'sm' | 'lg',
    fuzzyList?: boolean
}
