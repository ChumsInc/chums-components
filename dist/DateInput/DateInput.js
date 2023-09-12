"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Input_1 = __importDefault(require("../Input"));
const DateInput_utils_1 = require("./DateInput.utils");
const DateInput = ({ date, value, onChangeDate, onChange, ...rest }) => {
    const dateValue = (0, DateInput_utils_1.inputDate)(date ?? value ?? new Date());
    const changeHandler = (ev) => {
        if (onChangeDate) {
            const date = (0, DateInput_utils_1.dateFromInputValue)(ev.target.value);
            if (date) {
                return onChangeDate(date);
            }
            return;
        }
        if (onChange) {
            return onChange(ev);
        }
    };
    return ((0, jsx_runtime_1.jsx)(Input_1.default, { type: "date", value: dateValue, ...rest, onChange: changeHandler }));
};
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map