export default class LocalStore {
    static clear() {
        window.localStorage.clear();
    }
    static getItem(key) {
        if (!window || !window.localStorage) {
            return;
        }
        const data = window.localStorage.getItem(key);
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
//# sourceMappingURL=LocalStore.js.map