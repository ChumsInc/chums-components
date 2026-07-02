import type {SearchCustomer} from "./customer-autocomplete-types";

export const customerKey = (row:Pick<SearchCustomer, 'ARDivisionNo'|'CustomerNo'>) => {
    return [row.ARDivisionNo, row.CustomerNo].filter(v => !!v).join('-');
}
