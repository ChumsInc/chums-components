import {useState} from "react";
import {CustomerAutocomplete, customerKey, type SearchCustomer} from "@chumsinc/ui/customer-autocomplete";
import {ErrorBoundary} from "react-error-boundary";
import AppErrorAlert from "./AppErrorAlert";
import {ItemAutocomplete} from "@chumsinc/ui/item-autocomplete";
import type {SearchItem} from "chums-types";

export default function LandingPage() {
    const [customer, setCustomer] = useState<SearchCustomer | null>(null);
    const [itemCode, setItemCode] = useState<string|null>(null);

    const selectCustomerHandler = (customer?: SearchCustomer | null) => {
        setCustomer(customer ?? null)
    }

    const setItemHandler = (item?: SearchItem | null) => {
        setItemCode(item?.ItemCode ?? null)
    }
    return (
        <ErrorBoundary FallbackComponent={AppErrorAlert}>
            <div className="row g-3 mb-3 align-items-center">
                <div className="col-md-6">
                    <ItemAutocomplete item={itemCode} onSelectItem={setItemHandler} />
                </div>
                <div className="col-md-6">
                    <div className="text-success">{`found ${itemCode ?? 'N/A'}`}</div>

                </div>
            </div>
            <div>
                <CustomerAutocomplete customer={customer} onSelectCustomer={selectCustomerHandler} />
                {customer && (
                    <div className="text-success">{`found ${customerKey(customer)}`}</div>
                )}
            </div>
        </ErrorBoundary>
    );
}
