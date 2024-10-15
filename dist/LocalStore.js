"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @deprecated prefer usehooks-ts useLocalStorage instead
 */
class LocalStore {
    static clear() {
        window.localStorage.clear();
    }
    static getItem(key, defaultValue = null) {
        if (!window || !window.localStorage) {
            return null;
        }
        const data = window.localStorage.getItem(key);
        if (data === null) {
            return defaultValue;
        }
        try {
            return JSON.parse(data);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log("getItem()", key, err.message);
            }
            return defaultValue;
        }
    }
    static setItem(key, data) {
        if (!window || !window.localStorage) {
            return;
        }
        window.localStorage.setItem(key, JSON.stringify(data));
    }
    static removeItem(key) {
        if (!window || !window.localStorage) {
            return;
        }
        window.localStorage.removeItem(key);
    }
}
exports.default = LocalStore;
//# sourceMappingURL=LocalStore.js.map