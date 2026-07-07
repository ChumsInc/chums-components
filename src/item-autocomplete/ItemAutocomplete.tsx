import {
    type ChangeEvent,
    type LabelHTMLAttributes,
    type ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
    useTransition
} from 'react';
import type {SearchItem} from "chums-types";
import {Spinner} from "react-bootstrap";
import {Autocomplete, type AutocompleteInputProps, type AutocompleteRootProps} from "@base-ui/react";
import {fetchItemLookup} from "./api";
import {useDebouncedCallback} from "@mantine/hooks";
import AutocompletePositioner from "../common/AutocompletePositioner";
import AutocompletePortal from "../common/AutocompletePortal";
import AutocompletePopup from "../common/AutocompletePopup";
import AutocompleteList from "../common/AutocompleteList";
import AutocompleteItem from "../common/AutocompleteItem";

export interface ItemAutocompleteProps extends AutocompleteRootProps<SearchItem> {
    slotProps?: {
        label?: string;
        labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
        inputProps?: AutocompleteInputProps;
    }
    item: string | null;
    onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
    onSelectItem: (item?: SearchItem | null) => void;
    children?: ReactNode;
}

export default function ItemAutocomplete({
                                             slotProps,
                                             item,
                                             onSelectItem,
    children,
                                             ...rootProps
                                         }: ItemAutocompleteProps) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<SearchItem[]>([]);
    const abortControllerRef = useRef<AbortController | null>(null);
    const [isPending, startTransition] = useTransition();
    const {contains} = Autocomplete.useFilter();
    const [open, setOpen] = useState<boolean>(false);

    const loadSearch = useCallback((nextValue: string) => {
        const controller = new AbortController();
        abortControllerRef.current?.abort();
        abortControllerRef.current = controller;
        startTransition(async () => {
            setError(null);
            const _results = await fetchItemLookup(nextValue);
            const results = _results.filter(item => contains(item.ItemCode, nextValue) || contains(item.ItemCodeDesc, nextValue));
            if (controller.signal.aborted) {
                return;
            }
            startTransition(() => {
                setResults(results);
            })
        })
    }, [contains]);

    const debouncedLoadSearch = useDebouncedCallback(loadSearch, 350);

    const searchChangedHandler = (nextValue: string) => {
        setInputValue(nextValue);
        const controller = new AbortController();
        abortControllerRef.current?.abort();
        abortControllerRef.current = controller;
        if (nextValue === '') {
            abortControllerRef.current?.abort();
            setResults([]);
            setError(null);
            return;
        }
        debouncedLoadSearch(nextValue);
    }

    useEffect(() => {
        startTransition(() => {
            setInputValue(item ?? '');
        })
    }, [item, setInputValue]);

    function getStatus(): ReactNode | null {
        if (isPending) {
            return (
                <>
                    <Spinner animation="border" size="sm" role="status" className="me-1"/>
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

        return `${results.length} items found`;
    }

    const acStatus = getStatus();

    return (
        <Autocomplete.Root open={open} onOpenChange={(open) => setOpen(open)}
                           value={inputValue}
                           onValueChange={searchChangedHandler}
                           items={results}
                           itemToStringValue={item => item.ItemCode} filter={null} {...rootProps}>
            <Autocomplete.InputGroup className="input-group input-group-sm">
                {slotProps?.label && (<label className="input-group-text"
                                             htmlFor={slotProps.labelProps?.htmlFor}>{slotProps.label}</label>)}
                <Autocomplete.Input className="form-control" placeholder="Item Code" {...slotProps?.inputProps}/>
                <Autocomplete.Trigger className="btn btn-outline-secondary">
                    <span className={open ? "bi-chevron-up" : 'bi-chevron-down'}/>
                </Autocomplete.Trigger>
                {children}
            </Autocomplete.InputGroup>
            <AutocompletePortal hidden={!acStatus}>
                <AutocompletePositioner sideOffset={4} align="start">
                    <AutocompletePopup aria-busy={isPending || undefined}>
                        <div className="bg-body p-1 border rounded">
                            <Autocomplete.Status>
                                {acStatus && <div className="text-secondary">{acStatus}</div>}
                            </Autocomplete.Status>
                            <AutocompleteList>
                                {(item: SearchItem) => (
                                    <AutocompleteItem key={item?.ItemCode} value={item}
                                                       onClick={() => {
                                                           onSelectItem(item);
                                                           setOpen(false);
                                                       }}>
                                        <div className="d-flex align-items-center=" style={{gap: '3rem'}}>
                                            <div className="flex-grow-1">
                                                <div className="fw-bold">{item.ItemCode}</div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                {item.ItemCodeDesc}
                                            </div>
                                        </div>
                                    </AutocompleteItem>

                                )}
                            </AutocompleteList>
                        </div>
                    </AutocompletePopup>
                </AutocompletePositioner>
            </AutocompletePortal>
        </Autocomplete.Root>
    )
}
ItemAutocomplete.displayName = 'ItemAutocomplete';
