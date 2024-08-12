/**
 * Created by steve on 8/24/2016.
 */
/**
 * @deprecated use fetchJSON instead
 */
export declare const fetchOptions: {
    PostJSON: (object?: Object, options?: RequestInit) => RequestInit;
    Delete: (options?: RequestInit) => RequestInit;
};
export declare function fetchJSON<T = unknown>(url: string, options?: RequestInit): Promise<T | null>;
export declare function fetchHTML(url: string, options?: RequestInit): Promise<string | undefined>;
/**
 * @deprecated use fetchJSON instead
 */
export declare function fetchPOST<T = unknown>(url: string, body: Object, options?: RequestInit): Promise<T | null>;
/**
 * @deprecated use fetchJSON instead
 */
export declare function fetchDELETE<T = unknown>(url: string, options?: RequestInit): Promise<T | null>;
