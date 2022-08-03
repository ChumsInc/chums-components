export default class LocalStore {
    static clear(): any;
    static getItem(key: string): any;
    static setItem(key: string, data: any): void;
    static removeItem(key: string): void;
}
