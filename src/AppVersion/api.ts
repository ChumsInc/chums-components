import {fetchJSON} from "../utils/fetch";

export async function loadVersion(path: string) {
    try {
        if (!path) {
            return null;
        }
        const res = await fetchJSON<{ version: string }>(path, {cache: "no-cache"});
        return res?.version ?? null;
    } catch(err:unknown) {
        if (err instanceof Error) {
            return Promise.reject(err);
        }
        return Promise.reject(new Error('Error in checkVersion()'));
    }
}
