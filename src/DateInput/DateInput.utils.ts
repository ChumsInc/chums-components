export const formatInputDate = (date:Date):string => {
    return [
        String(date.getFullYear()).padStart(4, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('-')

}

export const inputDate = (date: Date | number | string | readonly string[]): string => {
    if (date instanceof Date) {
        return formatInputDate(date);
    }
    if (typeof  date === 'number') {
        return formatInputDate(new Date(date));
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(date as string)) {
        const d = dateFromInputValue(date as string);
        return d instanceof Date ? formatInputDate(d) : '';
    }
    const d = new Date(date as string);
    if (!isNaN(d.valueOf())) {
        return formatInputDate(d);
    }
    return '';
}

export const dateFromInputValue = (value: string): Date|null => {
    const date = new Date(value);
    if (isNaN(date.valueOf())) {
        return null;
    }
    return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
}
