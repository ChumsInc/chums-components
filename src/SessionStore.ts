export default class SessionStore {
    static clear():any {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.clear();
    }

    static getItem<T = any>(key:string):T|null|string {
        if (!window || !window.sessionStorage) {
            return null;
        }
        const data = window.sessionStorage.getItem(key);
        try {
            return JSON.parse(data ?? 'null');
        } catch(err:unknown) {
            if (err instanceof Error) {
                console.log("getItem()", key, err.message);
            }
            return data;
        }
    }

    static setItem(key:string, data:any) {
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
