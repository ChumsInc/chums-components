import React, {ChangeEvent, memo} from 'react';
export const defaultRowsPerPageValues: number[] = [10, 25, 50, 100, 250, 500, 1000];


export interface RowsPerPageProps {
    value: number,
    pageValues?: number[],
    onChange: (value: number) => void,
}

const RowsPerPage: React.FC<RowsPerPageProps> = ({
                                                     value,
                                                     pageValues = defaultRowsPerPageValues,
                                                     onChange
                                                 }) => {
    const changeHandler = (ev: ChangeEvent<HTMLSelectElement>) => onChange(Number(ev.target.value));

    return (
        <select value={value} onChange={changeHandler} className="form-select form-select-sm">
            {pageValues.map(value => (
                <option key={value} value={value}>{value}</option>
            ))}
        </select>
    )
}
export default memo(RowsPerPage);
