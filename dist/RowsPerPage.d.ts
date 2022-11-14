import React, { HTMLAttributes } from 'react';
import { BootstrapSize } from "./types";
export declare const defaultRowsPerPageValues: number[];
export interface RowsPerPageProps extends Omit<HTMLAttributes<HTMLSelectElement>, 'onChange'> {
    value: number;
    pageValues?: number[];
    bsSize?: BootstrapSize;
    className?: string;
    onChange: (value: number) => void;
}
declare const _default: React.NamedExoticComponent<RowsPerPageProps>;
export default _default;
