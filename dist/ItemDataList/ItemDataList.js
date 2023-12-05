"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ItemDataList_utils_1 = require("./ItemDataList.utils");
const ItemDataList = ({ id, search, delay = 600, filter, ...props }) => {
    const controller = new AbortController();
    const [items, setItems] = (0, react_1.useState)([]);
    const [timer, setTimer] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        return () => {
            controller.abort();
            window.clearTimeout(timer);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        window.clearTimeout(timer);
        const newTimer = window.setTimeout(async () => {
            try {
                const searchItems = await (0, ItemDataList_utils_1.loadItemSearch)(search, filter, controller.signal);
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
    return ((0, jsx_runtime_1.jsx)("datalist", { id: id, ...props, children: items.map(item => ((0, jsx_runtime_1.jsx)("option", { value: item.ItemCode, className: `item-data-list--${item.ProductType}`, children: item.ItemCodeDesc }, item.ItemCode))) }));
};
exports.default = ItemDataList;
//# sourceMappingURL=ItemDataList.js.map