"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadVersion = void 0;
const fetch_1 = require("../utils/fetch");
async function loadVersion(path) {
    try {
        if (!path) {
            return null;
        }
        const res = await (0, fetch_1.fetchJSON)(path, { cache: "no-cache" });
        return res?.version ?? null;
    }
    catch (err) {
        if (err instanceof Error) {
            return Promise.reject(err);
        }
        return Promise.reject(new Error('Error in checkVersion()'));
    }
}
exports.loadVersion = loadVersion;
//# sourceMappingURL=api.js.map