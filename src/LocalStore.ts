export default class LocalStore {
    static clear():void {
        window.localStorage.clear();
    }

    static getItem<T = any>(key:string, defaultValue: T|null = null):T|null {
        if (!window || !window.localStorage) {
            return null;
        }
        const data = window.localStorage.getItem(key);
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

    static setItem<T = any>(key:string, data:T) {
        if (!window || !window.localStorage) {
            return;
        }
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    static removeItem(key:string) {
        if (!window || !window.localStorage) {
            return;
        }
        window.localStorage.removeItem(key);
    }
}
