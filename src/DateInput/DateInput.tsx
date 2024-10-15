import React, {ChangeEvent} from 'react';
import Input from "../Input";
import {DateInputProps} from "./DateInput.types";
import {dateFromInputValue, inputDate} from "./DateInput.utils";

/**
 * @deprecated Prefer react-bootstrap/FormControl instead
 */
const DateInput = ({date, value, onChangeDate, onChange, ...rest}: DateInputProps) => {
    const dateValue = inputDate(date ?? value ?? new Date());
    const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        if (onChangeDate) {
            const date = dateFromInputValue(ev.target.value);
            if (date) {
                return onChangeDate(date);
            }
            return;
        }
        if (onChange) {
            return onChange(ev);
        }
    }

    return (
        <Input type="date" value={dateValue} {...rest} onChange={changeHandler}/>
    )
}

export default DateInput;
