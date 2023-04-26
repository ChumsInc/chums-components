import React, {useEffect, useState} from 'react';
import {ItemDataListProps, ItemSearchRecord} from "./ItemDataList.types";
import {loadItemSearch} from "./ItemDataList.utils";

const ItemDataList = ({
                          id,
                          search,
                          delay = 600,
                          filter,
                          ...props
                      }: ItemDataListProps) => {
    const controller = new AbortController();

    const [items, setItems] = useState<ItemSearchRecord[]>([]);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        return () => {
            controller.abort();
            window.clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        window.clearTimeout(timer);
        const newTimer = window.setTimeout(async () => {
            try {
                const searchItems = await loadItemSearch(search, filter, controller.signal);
                setItems(searchItems || []);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log("ItemDataList.useEffect()", error.name, error.message);
                }
            }

        }, delay);
        setTimer(() => newTimer);
    }, [search]);


    return (
        <datalist id={id} {...props}>
            {items.map(item => (
                <option key={item.ItemCode} value={item.ItemCode} className={`item-data-list--${item.ProductType}`}>
                    {item.ItemCodeDesc}
                </option>
            ))}
        </datalist>
    )
}

export default ItemDataList;
