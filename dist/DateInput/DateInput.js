import { jsx as _jsx } from "react/jsx-runtime";
import Input from "../Input";
import { dateFromInputValue, inputDate } from "./DateInput.utils";
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