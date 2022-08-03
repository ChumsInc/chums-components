export default class SessionStore {
    static clear() {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.clear();
    }
    static getItem(key) {
        if (!window || !window.sessionStorage) {
            return;
        }
        const data = window.sessionStorage.getItem(key);
        if (!data) {
            return null;
        }
        try {
            return JSON.parse(data);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log("getItem()", key, err.message);
            }
            return data;
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
//# sourceMappingURL=SessionStore.js.map