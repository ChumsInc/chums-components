export default  class LocalStore {
    static clear():any {
        window.localStorage.clear();
    }

    static getItem(key:string):any {
        if (!window || !window.localStorage) {
            return;
        }

        const data = window.localStorage.getItem(key);
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
