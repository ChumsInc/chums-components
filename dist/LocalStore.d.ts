export default class LocalStore {
    static clear(): void;
    static getItem<T = any>(key: string): T | null | string;
    static setItem(key: string, data: any): void;
    static removeItem(key: string): void;
}
