export default class SessionStore {
    static clear():void {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.clear();
    }

    static getItem<T = unknown>(key:string, defaultValue:T|null = null):T|null {
        if (!window || !window.sessionStorage) {
            return null;
        }
        const data = window.sessionStorage.getItem(key);
        if (data === null) {
            return defaultValue;
        }
        try {
            return JSON.parse(data);
        } catch(err:unknown) {
            if (err instanceof Error) {
                console.log("getItem()", key, err.message);
            }
            return defaultValue;
        }
    }

    static setItem<T = unknown>(key:string, data:T) {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.setItem(key, JSON.stringify(data));
    }

    static removeItem(key:string) {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.removeItem(key);
    }
}
