import { ItemSearchFilter, ItemSearchRecord } from "./ItemDataList.types";
export declare function parseSearchParams(search: string, filter?: ItemSearchFilter): URLSearchParams;
export declare function loadItemSearch(search: string, filter?: ItemSearchFilter, signal?: AbortSignal): Promise<ItemSearchRecord[]>;
