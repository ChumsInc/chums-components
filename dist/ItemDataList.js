import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { fetchJSON } from "./fetch";
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
async function loadItemSearch(search, filter, signal) {
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
const ItemDataList = ({ id, search, delay = 600, filter, ...props }) => {
    const controller = new AbortController();
    const [items, setItems] = useState([]);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        return () => {
            controller.abort();
            window.clearTimeout(timer);
        };
    }, []);
    useEffect(() => {
        window.clearTimeout(timer);
        const newTimer = window.setTimeout(async () => {
            try {
                const searchItems = await loadItemSearch(search, filter, controller.signal);
                setItems(searchItems || []);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log("ItemDataList.useEffect()", error.name, error.message);
                }
            }
        }, delay);
        setTimer(() => newTimer);
    }, [search]);
    return (_jsx("datalist", { id: id, ...props, children: items.map(item => (_jsx("option", { value: item.ItemCode, className: `item-data-list--${item.ProductType}`, children: item.ItemCodeDesc }, item.ItemCode))) }));
};
export default ItemDataList;
//# sourceMappingURL=ItemDataList.js.map