export default class LocalStore {
    static clear(): void;
    static getItem<T = unknown>(key: string, defaultValue?: T | null): T | null;
    static setItem<T = unknown>(key: string, data: T): void;
    static removeItem(key: string): void;
}
