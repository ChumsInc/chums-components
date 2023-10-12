"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromInputValue = exports.inputDate = exports.formatInputDate = void 0;
const formatInputDate = (date) => {
    return [
        String(date.getFullYear()).padStart(4, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('-');
};
exports.formatInputDate = formatInputDate;
const inputDate = (date) => {
    if (date instanceof Date) {
        return (0, exports.formatInputDate)(date);
    }
    if (typeof date === 'number') {
        return (0, exports.formatInputDate)(new Date(date));
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        const d = (0, exports.dateFromInputValue)(date);
        return d instanceof Date ? (0, exports.formatInputDate)(d) : '';
    }
    const d = new Date(date);
    if (!isNaN(d.valueOf())) {
        return (0, exports.formatInputDate)(d);
    }
    return '';
};
exports.inputDate = inputDate;
const dateFromInputValue = (value) => {
    const date = new Date(value);
    if (isNaN(date.valueOf())) {
        return null;
    }
    return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
};
exports.dateFromInputValue = dateFromInputValue;
//# sourceMappingURL=DateInput.utils.js.map