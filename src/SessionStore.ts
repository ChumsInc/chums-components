export class SessionStore {
    static clear():any {
        if (!window || !window.sessionStorage) {
            return;
        }
        window.sessionStorage.clear();
    }

    static getItem(key:string):any {
        if (!window || !window.sessionStorage) {
            return;
        }
        const data = window.sessionStorage.getItem(key);
        if (!data) {
            return null;
        }
        try {
            return JSON.parse(data);
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
