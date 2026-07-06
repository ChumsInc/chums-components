import {fetchJSON} from "@chumsinc/ui-utils";
import type {SearchItem} from 'chums-types'

export async function fetchItemLookup(search:string, exact?: boolean):Promise<SearchItem[]> {
    try {
        const params = new URLSearchParams();
        if (exact) {
            params.set('exact', search);
        } else {
            params.set('search', search);
        }
        const url = `/api/search/item.json?${params.toString()}`;
        const res = await fetchJSON<{result: SearchItem[]}>(url);
        return res?.result ?? [];
    } catch(err:unknown) {
        if (err === 'AbortError') {
            return []
        }
        if (err instanceof Error) {
            console.debug("fetchItemLookup()", err.message);
            return Promise.reject(err);
        }
        console.debug("fetchItemLookup()", err);
        return Promise.reject(new Error('Error in fetchItemLookup()'));
    }
}

