"use strict";
/**
 * Created by steve on 8/24/2016.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOptions = void 0;
exports.fetchJSON = fetchJSON;
exports.fetchHTML = fetchHTML;
exports.fetchPOST = fetchPOST;
exports.fetchDELETE = fetchDELETE;
/**
 * @deprecated use fetchJSON instead
 */
exports.fetchOptions = {
    PostJSON: (object, options) => {
        options = options || {};
        const headers = options?.headers || {};
        if (options?.headers) {
            delete options.headers;
        }
        return {
            credentials: 'same-origin',
            method: 'post',
            ...options,
            body: JSON.stringify(object),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            },
        };
    },
    Delete: (options) => {
        options = options || {};
        const headers = options.headers || {};
        delete options.headers;
        return {
            credentials: 'same-origin',
            method: 'DELETE',
            ...options,
            headers: {
                ...headers
            }
        };
    }
};
async function handleJSONResponse(res) {
    if (!res.ok) {
        const text = await res.text();
        return Promise.reject(new Error(text));
    }
    const json = await res.json();
    if (json.error) {
        console.warn(json.error);
        return Promise.reject(new Error(json.error));
    }
    return json ?? null;
}
async function fetchJSON(url, options = {}) {
    try {
        if (!!options?.method && ['POST', 'PUT'].includes(options.method.toUpperCase())) {
            const headers = options?.headers || {};
            if (options?.headers) {
                delete options.headers;
            }
            options.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            };
        }
        const res = await fetch(url, { credentials: 'same-origin', ...options });
        return await handleJSONResponse(res);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("fetchJSON()", err.message);
            return Promise.reject(err);
        }
        console.error("fetchJSON()", err);
        if (typeof err === 'string') {
            return Promise.reject(new Error(err));
        }
        return Promise.reject(err);
    }
}
async function fetchHTML(url, options = {}) {
    try {
        const res = await fetch(url, { credentials: 'same-origin', ...options });
        if (!res.ok) {
            const text = await res.text();
            return Promise.reject(new Error(text));
        }
        return await res.text();
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("fetchHTML()", err.message);
            return Promise.reject(err);
        }
        console.error("fetchHTML()", err);
        if (typeof err === 'string') {
            return Promise.reject(new Error(err));
        }
        return Promise.reject(err);
    }
}
/**
 * @deprecated use fetchJSON instead
 */
async function fetchPOST(url, body, options = {}) {
    try {
        const _options = exports.fetchOptions.PostJSON(body, options);
        return await fetchJSON(url, _options);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("fetchPOST()", err.message);
            return Promise.reject(err);
        }
        console.error('fetchPOST()', err);
        if (typeof err === 'string') {
            return Promise.reject(new Error(err));
        }
        return Promise.reject(err);
    }
}
/**
 * @deprecated use fetchJSON instead
 */
async function fetchDELETE(url, options = {}) {
    try {
        const _options = exports.fetchOptions.PostJSON(options);
        return await fetchJSON(url, _options);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("fetchDELETE()", err.message);
            return Promise.reject(err);
        }
        console.log('fetchDELETE', err);
        if (typeof err === 'string') {
            return Promise.reject(new Error(err));
        }
        return Promise.reject(err);
    }
}
//# sourceMappingURL=fetch.js.map