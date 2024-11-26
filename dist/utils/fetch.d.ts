/**
 * Created by steve on 8/24/2016.
 */
export declare function fetchJSON<T = unknown>(url: string, options?: RequestInit): Promise<T | null>;
export declare function fetchHTML(url: string, options?: RequestInit): Promise<string | undefined>;
