import { fetchJSON } from "../utils/fetch";
export async function loadVersion(path) {
    try {
        if (!path) {
            return null;
        }
        const res = await fetchJSON(path, { cache: "no-cache" });
        return res?.version ?? null;
    }
    catch (err) {
        if (err instanceof Error) {
            return Promise.reject(err);
        }
        return Promise.reject(new Error('Error in checkVersion()'));
    }
}
//# sourceMappingURL=api.js.map