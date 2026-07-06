import {render, screen, waitFor} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {useState} from "react"
import {ItemAutocomplete} from "./index";
import type {SearchItem} from "chums-types";

const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

function createFetchResponse<T = unknown>(data: T, status = 200): Response {
    return {
        ok: status >= 200 && status < 300,
        status,
        json: async () => data,
        text: async () => JSON.stringify(data),
    } as Response;
}

const testItemsResponse = {
    "result": [
        {
            "Company": "chums",
            "ItemCode": "12115100",
            "ItemCodeDesc": "Original Std Black Ret",
            "ProductType": "F",
            "ProductLine": "E",
            "Category1": "RCH100",
            "UDF_UPC": "000298100017",
            "UDF_UPC_BY_COLOR": "093039810726",
            "SuggestedRetailPrice": "9.990000",
            "filename": "12115100 Original Cotton FLAT.jpg",
            "b2bItem": "Y",
            "ProductStatus": null,
            "TemplateNo": null
        },
        {
            "Company": "chums",
            "ItemCode": "12115100BT",
            "ItemCodeDesc": "!Original Std BLK Barrier Tech",
            "ProductType": "F",
            "ProductLine": "E",
            "Category1": null,
            "UDF_UPC": "000298100017",
            "UDF_UPC_BY_COLOR": null,
            "SuggestedRetailPrice": "0.000000",
            "filename": null,
            "b2bItem": "N",
            "ProductStatus": "MTO",
            "TemplateNo": null
        },
        {
            "Company": "chums",
            "ItemCode": "12115100DSG",
            "ItemCodeDesc": "Original Std Black Ret DSG",
            "ProductType": "F",
            "ProductLine": "E",
            "Category1": "RCH100",
            "UDF_UPC": "093039810726",
            "UDF_UPC_BY_COLOR": "093039810726",
            "SuggestedRetailPrice": "9.990000",
            "filename": null,
            "b2bItem": "N",
            "ProductStatus": null,
            "TemplateNo": null
        },
        {
            "Company": "chums",
            "ItemCode": "12115100DUKE",
            "ItemCodeDesc": "Original Std Blk DUKE Imprint",
            "ProductType": "K",
            "ProductLine": "E",
            "Category1": null,
            "UDF_UPC": "000298100017",
            "UDF_UPC_BY_COLOR": null,
            "SuggestedRetailPrice": "9.990000",
            "filename": null,
            "b2bItem": "N",
            "ProductStatus": null,
            "TemplateNo": null
        },
        {
            "Company": "chums",
            "ItemCode": "12115100FBA",
            "ItemCodeDesc": "Original Std Black Ret FBA",
            "ProductType": "F",
            "ProductLine": "E",
            "Category1": null,
            "UDF_UPC": "X00380SI7R",
            "UDF_UPC_BY_COLOR": "X00380SI7R",
            "SuggestedRetailPrice": "9.990000",
            "filename": null,
            "b2bItem": "N",
            "ProductStatus": null,
            "TemplateNo": null
        }
    ]
}

function ItemAutocompleteTest() {
    const [itemCode, setItemCode] = useState<string | null>(null);
    const selectItemHandler = (item?: SearchItem | null) => {
        setItemCode(item?.ItemCode ?? null)
    }
    return (
        <div>
            <ItemAutocomplete item={itemCode} onSelectItem={selectItemHandler}/>
            {itemCode && (
                <div data-testid="found-result">{`found ${itemCode ?? 'N/A'}`}</div>
            )}
        </div>
    )
}

describe('ItemAutocomplete', () => {
    beforeEach(() => {
        vi.useFakeTimers({
            toFake: ['setInterval', 'clearInterval']
        });
        vi.mocked(fetch).mockReset();
        vi.mocked(fetch).mockReturnValue(new Promise(() => {
        }));
    })
    afterEach(() => {
        vi.clearAllTimers();
        vi.clearAllMocks();
    })

    it('renders the empty input field', async () => {
        render(<ItemAutocompleteTest/>);
        expect(screen.getByRole('combobox')).toBeVisible()
    })


    it('allows input of a search item', async () => {
        const user = userEvent.setup();
        render(<ItemAutocompleteTest/>);
        const input = screen.getByRole<HTMLInputElement>('combobox');
        await waitFor(async () => {
            input.focus();
            await user.type(input, '12115100');
        })
        expect(input).toHaveValue('12115100');
    })

    it('loads results from the server', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testItemsResponse));
        render(<ItemAutocompleteTest/>);
        const input = screen.getByRole<HTMLInputElement>('combobox');
        await user.type(input, '12115100');
        await screen.findByText('5 items found')
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('listbox')).toBeVisible();
        const options = screen.getAllByRole('option');
        expect(options.length).toBe(5);
    })

    it('renders an item when selected', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testItemsResponse));
        render(<ItemAutocompleteTest/>);
        const input = screen.getByRole<HTMLInputElement>('combobox');
        await user.type(input, '12115100');
        await screen.findByText('5 items found')
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1);
        const options = screen.getAllByRole<HTMLDivElement>('option');
        expect(options.length).toBe(5);
        expect(options[2]).toHaveTextContent(/Original Std Black Ret DSG/i);
        await user.click(options[2]!)
        vi.advanceTimersByTime(1000);
        await screen.findByText('found 12115100DSG');
        const selectedItem = screen.getByTestId('found-result');
        expect(selectedItem).toBeVisible();
        expect(selectedItem).toHaveTextContent('found 12115100DSG');
    })

    it('allows up/down and selects an item on enter', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testItemsResponse));
        render(<ItemAutocompleteTest/>);
        const input = screen.getByRole<HTMLInputElement>('combobox');
        await user.type(input, '12115100');
        await screen.findByText('5 items found')
        const options = screen.getAllByRole<HTMLDivElement>('option');
        await user.keyboard('{ArrowDown}');
        expect(options[0]).toHaveAttribute('data-highlighted');
        expect(options[1]).not.toHaveAttribute('data-highlighted');
        await user.keyboard('{ArrowDown}');
        expect(options[0]).not.toHaveAttribute('data-highlighted');
        expect(options[1]).toHaveAttribute('data-highlighted');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowUp}');
        expect(options[3]).not.toHaveAttribute('data-highlighted');
        expect(options[2]).toHaveAttribute('data-highlighted');
        await user.keyboard('{Enter}');
        vi.advanceTimersByTime(1000);
        await screen.findByText('found 12115100DSG');
        const selectedItem = screen.getByTestId('found-result');
        expect(selectedItem).toBeVisible();
        expect(selectedItem).toHaveTextContent('found 12115100DSG');
    })

    it('closes popup when escape is pressed', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testItemsResponse));
        const {container} = render(<ItemAutocompleteTest/>);
        const input = screen.getByRole<HTMLInputElement>('combobox');
        await user.type(input, '12115100');
        await screen.findByText('5 items found')
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowUp}');
        await user.keyboard('{Escape}');
        vi.advanceTimersByTime(1000);
        const popup = container.querySelector('[role="presentation"][data-open]');
        expect(popup).not.toBeInTheDocument();
    })

    it('opens and closes the popup when the toggle is clicked', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testItemsResponse));
        const {container} = render(<ItemAutocompleteTest/>);
        const input = screen.getByRole<HTMLInputElement>('combobox');
        const button = container.querySelector('button[aria-haspopup="listbox"]');
        expect(button).toBeInTheDocument();
        await user.type(input, '12115100');
        await screen.findByText('5 items found')
        let popup = document.querySelector('[role="presentation"][data-open]');
        expect(popup).toBeInTheDocument();
        await user.keyboard('{Escape}'); // close the popup
        vi.advanceTimersByTime(1000);
        popup = document.querySelector('[role="presentation"][data-open]');
        expect(popup).not.toBeInTheDocument();
        await user.click(button!); // toggle open
        popup = document.querySelector('[role="presentation"][data-open]');
        expect(popup).toBeInTheDocument();
        await user.click(button!); // toggle closed
        popup = document.querySelector('[role="presentation"][data-open]');
        expect(popup).not.toBeInTheDocument();
    })

})
