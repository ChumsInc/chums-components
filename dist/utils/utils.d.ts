export declare const noop: (any?: any) => void;
/**
 * Returns a regular expression that is used by the
 * subsequence search engine.
 * @param {String} str String to search for
 * @param {String} flags RegExp flags for returned value
 * @return {RegExp}     Regular expression based off input search string
 * @see https://git.io/v7LGt
 */
export declare const getRegex: (str: string, flags?: string) => RegExp;
export declare const commaFormatter: (n: number) => string;
export declare const averageColor: (hex: string) => number;
export declare const isLightColor: (hex: string) => boolean;
