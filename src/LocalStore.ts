export default class LocalStore {
    static clear():void {
        window.localStorage.clear();
    }

    static getItem<T = any>(key:string):T|null {
        if (!window || !window.localStorage) {
            return null;
        }

        const data = window.localStorage.getItem(key);
        try {
            return JSON.parse(data ?? 'null');
        } catch(err:unknown) {
            if (err instanceof Error) {
                console.log("getItem()", key, err.message);
            }
            return null;
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
