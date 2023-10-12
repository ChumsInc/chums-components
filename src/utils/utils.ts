export const noop = (any?:any):void => {};


/**
 * Returns a regular expression that is used by the
 * subsequence search engine.
 * @param {String} str String to search for
 * @param {String} flags RegExp flags for returned value
 * @return {RegExp}     Regular expression based off input search string
 * @see https://git.io/v7LGt
 */

export const getRegex = (str:string, flags:string = 'i'):RegExp => {
    const split:string[] = str.split('').map(char => {
        //escape special chars
        if (
            '*'  === char   ||
            '.'  === char   ||
            '+'  === char   ||
            '('  === char   ||
            ')'  === char   ||
            '\\' === char   ||
            '?'  === char   ||
            '\'' === char   ||
            '$'  === char   ||
            '^'  === char   ||
            '/'  === char   ||
            '['  === char   ||
            ']'  === char
        ) char = '\\' + char;

        return '(' + char + ')';
    });
    const string = '^(.*?)' + split.join('(.*?)') + '(.*?)(.*)$';
    return new RegExp(string, flags);
}


export const commaFormatter =(n:number):string => {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const averageColor = (hex:string):number => {
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }
    if (!/[0-9A-F]{6,8}/i.test(hex)) {
        return 0;
    }
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4,6), 16);
    const trans = parseInt(hex.slice(6,8));
    const hsp = Math.sqrt(
        0.299 * (red * red) +
        0.587 * (green * green) +
        0.114 * (blue * blue)
    );
    if (!isNaN(trans)) {
        return hsp * (trans / 255);
    }
    return hsp;
}
export const isLightColor = (hex:string) => {
    return averageColor(hex) > 127.5;
}
