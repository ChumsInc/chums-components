"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SessionStore {
    static clear() {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.clear();
    }
    static getItem(key, defaultValue = null) {
        if (!window || !window.sessionStorage) {
            return null;
        }
        const data = window.sessionStorage.getItem(key);
        try {
            return JSON.parse(data ?? 'null');
        }
        catch (err) {
            if (err instanceof Error) {
                console.log("getItem()", key, err.message);
            }
            return defaultValue;
        }
    }
    static setItem(key, data) {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.setItem(key, JSON.stringify(data));
    }
    static removeItem(key) {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.removeItem(key);
    }
}
exports.default = SessionStore;
//# sourceMappingURL=SessionStore.js.map