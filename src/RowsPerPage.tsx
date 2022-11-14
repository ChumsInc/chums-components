import React, {ChangeEvent, HTMLAttributes, memo} from 'react';
import {BootstrapSize} from "./types";
import classNames from "classnames";

export const defaultRowsPerPageValues: number[] = [10, 25, 50, 100, 250, 500, 1000];


export interface RowsPerPageProps extends Omit<HTMLAttributes<HTMLSelectElement>, 'onChange'> {
    value: number;
    pageValues?: number[];
    bsSize?: BootstrapSize;
    className?: string;
    onChange: (value: number) => void;
}

const RowsPerPage: React.FC<RowsPerPageProps> = ({
                                                     value,
                                                     pageValues = defaultRowsPerPageValues,
                                                     bsSize,
                                                     className,
                                                     onChange,
                                                     ...rest
                                                 }) => {
    const changeHandler = (ev: ChangeEvent<HTMLSelectElement>) => onChange(Number(ev.target.value));

    const selectClassName = className ?? classNames('form-select', {[`form-select-${bsSize}`]: !!bsSize});

    return (
        <select value={value} onChange={changeHandler} className={selectClassName} {...rest}>
            {pageValues.map(value => (
                <option key={value} value={value}>{value}</option>
            ))}
        </select>
    )
}
export default memo(RowsPerPage);
