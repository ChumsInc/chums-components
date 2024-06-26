/**
 * Created by steve on 8/24/2016.
 */
export declare const fetchOptions: {
    PostJSON: (object?: Object, options?: RequestInit) => RequestInit;
    Delete: (options?: RequestInit) => RequestInit;
};
export declare function fetchJSON<T = any>(url: string, options?: RequestInit): Promise<T | null>;
export declare function fetchHTML(url: string, options?: RequestInit): Promise<string | undefined>;
export declare function fetchPOST<T = any>(url: string, body: Object, options?: RequestInit): Promise<T | null>;
export declare function fetchDELETE<T = any>(url: string, options?: RequestInit): Promise<T | null>;
