"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLightColor = exports.averageColor = exports.commaFormatter = exports.getRegex = exports.noop = void 0;
const noop = () => { };
exports.noop = noop;
/**
 * Returns a regular expression that is used by the
 * subsequence search engine.
 * @param {String} str String to search for
 * @param {String} flags RegExp flags for returned value
 * @return {RegExp}     Regular expression based off input search string
 * @see https://git.io/v7LGt
 */
const getRegex = (str, flags = 'i') => {
    const split = str.split('').map(char => {
        //escape special chars
        if ('*' === char ||
            '.' === char ||
            '+' === char ||
            '(' === char ||
            ')' === char ||
            '\\' === char ||
            '?' === char ||
            '\'' === char ||
            '$' === char ||
            '^' === char ||
            '/' === char ||
            '[' === char ||
            ']' === char)
            char = '\\' + char;
        return '(' + char + ')';
    });
    const string = '^(.*?)' + split.join('(.*?)') + '(.*?)(.*)$';
    return new RegExp(string, flags);
};
exports.getRegex = getRegex;
const commaFormatter = (n) => {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
exports.commaFormatter = commaFormatter;
const averageColor = (hex) => {
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }
    if (!/[0-9A-F]{6,8}/i.test(hex)) {
        return 0;
    }
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4, 6), 16);
    const trans = parseInt(hex.slice(6, 8));
    const hsp = Math.sqrt(0.299 * (red * red) +
        0.587 * (green * green) +
        0.114 * (blue * blue));
    if (!isNaN(trans)) {
        return hsp * (trans / 255);
    }
    return hsp;
};
exports.averageColor = averageColor;
const isLightColor = (hex) => {
    return (0, exports.averageColor)(hex) > 127.5;
};
exports.isLightColor = isLightColor;
//# sourceMappingURL=utils.js.map