import {
    type ChangeEvent,
    type LabelHTMLAttributes,
    type ReactNode,
    useEffect,
    useRef,
    useState,
    useTransition
} from 'react';
import type {SearchCustomer} from "./customer-autocomplete-types";
import {fetchCustomerLookup} from "./api";
import {customerKey} from "./utils";
import {Autocomplete, type AutocompleteInputProps, type AutocompleteRootProps} from "@base-ui/react/autocomplete";
import {Spinner} from "react-bootstrap";
import classes from "./autocomplete.module.css";
import {useDebouncedCallback} from "@mantine/hooks";


export interface CustomerAutocompleteProps extends AutocompleteRootProps<SearchCustomer> {
    slotProps?: {
        label?: string;
        labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
        inputProps?: AutocompleteInputProps;
    }
    customer: SearchCustomer | null;
    onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
    onSelectCustomer: (customer?: SearchCustomer | null) => void;
    children?: ReactNode;
}

export default function CustomerAutocomplete({
                                  slotProps,
                                  customer,
                                  onSelectCustomer,
                                  ...rootProps
                              }: CustomerAutocompleteProps){
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<readonly SearchCustomer[]>([]);
    const abortControllerRef = useRef<AbortController | null>(null);
    const [isPending, startTransition] = useTransition();
    const {contains} = Autocomplete.useFilter();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        startTransition(() => {
            setInputValue(customer ? customerKey(customer) : '');
        })
    }, [customer]);


    const loadSearch = useDebouncedCallback((nextValue: string) => {
        const controller = new AbortController();
        abortControllerRef.current?.abort();
        abortControllerRef.current = controller;
        startTransition(async () => {
            try {
                setError(null);
                const _results = await fetchCustomerLookup(nextValue, controller.signal)
                const results = _results.filter(c => contains(customerKey(c), nextValue) || contains(c.CustomerName, nextValue));
                if (controller.signal.aborted) {
                    return;
                }
                startTransition(() => {
                    setResults(results);
                })
            } catch(err:unknown) {
                setError(err instanceof Error ? err.message : 'Error in searchChangeHandler()');
            }
        })
    }, 350)

    const searchChangeHandler = (nextValue: string) => {
        setInputValue(nextValue);
        if (nextValue === '') {
            abortControllerRef.current?.abort();
            setResults([]);
            setError(null);
            return;
        }
        loadSearch(nextValue);
    }

    function getStatus(): ReactNode | null {
        if (isPending) {
            return (
                <>
                    <Spinner animation="border" size="sm" role="status"/>
                    Searching...
                </>
            )
        }
        if (error) {
            return (
                <span className="text-danger">{error}</span>
            )
        }
        if (inputValue === '') {
            return null;
        }
        if (results.length === 0) {
            return (
                <span className="text-muted">No results found</span>
            )
        }

        return `${results.length} customers found`;
    }

    const status = getStatus();
    return (
        <Autocomplete.Root open={open} onOpenChange={(open) => setOpen(open)}
                           value={inputValue}
                           onValueChange={searchChangeHandler}
                           items={results}
                           itemToStringValue={item => customerKey(item)} filter={null} {...rootProps}>
            <Autocomplete.InputGroup className="input-group input-group-sm">
                {slotProps?.label && (<label className="input-group-text"
                                             htmlFor={slotProps.labelProps?.htmlFor}>{slotProps.label}</label>)}
                <Autocomplete.Input className="form-control" placeholder="Customer No" {...slotProps?.inputProps}/>
                <Autocomplete.Trigger className="btn btn-outline-secondary">
                    <span className={open ? "bi-chevron-up" : 'bi-chevron-down'}/>
                </Autocomplete.Trigger>
            </Autocomplete.InputGroup>
            <Autocomplete.Portal hidden={!status} className={classes.Portal}>
                <Autocomplete.Positioner sideOffset={4} align="start">
                    <Autocomplete.Popup aria-busy={isPending || undefined} className={classes.Popup}>
                        <div className="bg-body p-1 border rounded">
                            <Autocomplete.Status>
                                {status && <div className="text-secondary">{status}</div>}
                            </Autocomplete.Status>
                            <Autocomplete.List>
                                {(customer: SearchCustomer) => (
                                    <Autocomplete.Item key={customerKey(customer)} value={customer}
                                                       onClick={() => {
                                                           onSelectCustomer(customer);
                                                           setOpen(false);
                                                       }}
                                                       className={classes.Item}>
                                        <div className="d-flex align-items-center=" style={{gap: '3rem'}}>
                                            <div className="flex-grow-1">
                                                <div className="fw-bold">{customerKey(customer)}</div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                {customer.CustomerName}
                                            </div>
                                        </div>
                                    </Autocomplete.Item>

                                )}
                            </Autocomplete.List>
                        </div>
                    </Autocomplete.Popup>
                </Autocomplete.Positioner>
            </Autocomplete.Portal>
        </Autocomplete.Root>
    )
}
CustomerAutocomplete.displayName = 'CustomerAutocomplete';
