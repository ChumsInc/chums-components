import type {SearchCustomer} from "./customer-autocomplete-types";
import {fetchJSON} from "@chumsinc/ui-utils";

export async function fetchCustomerLookup(search: string, signal?: AbortSignal): Promise<SearchCustomer[]> {
    try {
        if (search === '') {
            return [];
        }
        const params = new URLSearchParams();
        params.set('search', search);
        const url = `/api/search/customer.json?${params.toString()}`;
        const res = await fetchJSON<{ result: SearchCustomer[] }>(url, {signal});
        return res?.result ?? [];
    } catch (err: unknown) {
        if (err instanceof Error) {
            if (err.name === 'AbortError') {
                return [];
            }
            console.debug("getCustomerLookup()", err.name, err.message);
            return Promise.reject(err);
        }
        console.debug("getCustomerLookup()", err);
        return Promise.reject(new Error('Error in getCustomerLookup()'));
    }
}
