export default class SessionStore {
    static clear(): any;
    static getItem<T = any>(key: string, defaultValue?: T | null): T | null;
    static setItem<T = any>(key: string, data: T): void;
    static removeItem(key: string): void;
}
