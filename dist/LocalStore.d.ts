export default class LocalStore {
    static clear(): void;
    static getItem<T = any>(key: string): T | null;
    static setItem<T = any>(key: string, data: T): void;
    static removeItem(key: string): void;
}
