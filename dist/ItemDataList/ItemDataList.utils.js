"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadItemSearch = exports.parseSearchParams = void 0;
const fetch_1 = require("../utils/fetch");
function parseSearchParams(search, filter) {
    const params = new URLSearchParams();
    params.set('search', search);
    if (!filter) {
        return params;
    }
    const { productType, productLine, category, subCategory, baseSKU } = filter;
    if (productType) {
        params.set('ProductType', productType);
    }
    if (productLine) {
        params.set('pl', productLine);
    }
    if (category) {
        params.set('cat', category);
    }
    if (subCategory) {
        params.set('subcat', subCategory);
    }
    if (baseSKU) {
        params.set('sku', baseSKU);
    }
    return params;
}
exports.parseSearchParams = parseSearchParams;
async function loadItemSearch(search, filter, signal) {
    try {
        if (!search) {
            return [];
        }
        const params = parseSearchParams(search, filter);
        const url = `/api/search/item/chums/?${params.toString()}`;
        const res = await (0, fetch_1.fetchJSON)(url, { signal });
        return res?.result ?? [];
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("loadItemSearch()", error.name, error.message);
            return Promise.reject(error);
        }
        console.error("loadItemSearch()", error);
        return [];
    }
}
exports.loadItemSearch = loadItemSearch;
//# sourceMappingURL=ItemDataList.utils.js.map