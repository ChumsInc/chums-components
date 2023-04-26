import { fetchJSON } from "../utils/fetch";
export function parseSearchParams(search, filter) {
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
export async function loadItemSearch(search, filter, signal) {
    try {
        if (!search) {
            return [];
        }
        const params = parseSearchParams(search, filter);
        const url = `/api/search/item/chums/?${params.toString()}`;
        const { result } = await fetchJSON(url, { signal });
        return result || [];
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
//# sourceMappingURL=ItemDataList.utils.js.map