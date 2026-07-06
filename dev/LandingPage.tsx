import {useState} from "react";
import {ErrorBoundary} from "react-error-boundary";
import AppErrorAlert from "./AppErrorAlert";
import type {SearchItem} from "chums-types";
import {CustomerAutocomplete, customerKey, type SearchCustomer} from "@chumsinc/ui";
import {ItemAutocomplete} from "@chumsinc/ui";


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
            <div className="row g-3 mb-3 align-items-center">
                <div className="col-md-6">
                    <CustomerAutocomplete customer={customer} onSelectCustomer={selectCustomerHandler} />
                </div>
                <div className="col-md-6">
                    {customer && (
                        <div className="text-success">{`found ${customerKey(customer)}`}</div>
                    )}
                </div>
            </div>
        </ErrorBoundary>
    );
}
