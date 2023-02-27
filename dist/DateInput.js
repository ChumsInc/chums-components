import { jsx as _jsx } from "react/jsx-runtime";
import Input from "./Input";
export const formatInputDate = (date) => {
    return [
        String(date.getFullYear()).padStart(4, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('-');
};
export const inputDate = (date) => {
    if (date instanceof Date) {
        return formatInputDate(date);
    }
    if (typeof date === 'number') {
        return formatInputDate(new Date(date));
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        const d = dateFromInputValue(date);
        return d instanceof Date ? formatInputDate(d) : '';
    }
    const d = new Date(date);
    if (!isNaN(d.valueOf())) {
        return formatInputDate(d);
    }
    return '';
};
export const dateFromInputValue = (value) => {
    const date = new Date(value);
    if (isNaN(date.valueOf())) {
        return null;
    }
    return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
};
const DateInput = ({ date, value, onChangeDate, onChange, ...rest }) => {
    const dateValue = inputDate(date ?? value ?? new Date());
    const changeHandler = (ev) => {
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
    };
    return (_jsx(Input, { type: "date", value: dateValue, ...rest, onChange: changeHandler }));
};
export default DateInput;
//# sourceMappingURL=DateInput.js.map