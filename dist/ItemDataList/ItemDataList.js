import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { loadItemSearch } from "./ItemDataList.utils";
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