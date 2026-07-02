import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useState } from "react";
import { CustomerAutocomplete, customerKey } from "./index";
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);
function createFetchResponse(data, status = 200) {
    return {
        ok: status >= 200 && status < 300,
        status,
        json: async () => data,
        text: async () => JSON.stringify(data),
    };
}
const testCustomersResponse = {
    "result": [
        {
            "Company": "chums",
            "ARDivisionNo": "06",
            "CustomerNo": "TEST",
            "CustomerName": "06 TEST ACCOUNT"
        },
        {
            "Company": "chums",
            "ARDivisionNo": "01",
            "CustomerNo": "TESTSLC",
            "CustomerName": "Chums Inc (TEST)"
        },
        {
            "Company": "chums",
            "ARDivisionNo": "01",
            "CustomerNo": "TESTHUR",
            "CustomerName": "Chums LTD TEST"
        },
        {
            "Company": "chums",
            "ARDivisionNo": "01",
            "CustomerNo": "TEST",
            "CustomerName": "CHUMS TEST ACCOUNT (Parent)"
        },
        {
            "Company": "chums",
            "ARDivisionNo": "01",
            "CustomerNo": "TESTKET",
            "CustomerName": "Chums WHQ TEst"
        }
    ]
};
function CustomerAutocompleteTest() {
    const [customer, setCustomer] = useState(null);
    const selectCustomerHandler = (customer) => {
        setCustomer(customer ?? null);
    };
    return (<div>
            <CustomerAutocomplete customer={customer} onSelectCustomer={selectCustomerHandler}/>
            {customer && (<div>{`found ${customerKey(customer)}`}</div>)}
        </div>);
}
describe('CustomerAutocomplete', () => {
    beforeEach(() => {
        vi.useFakeTimers({
            toFake: ['setInterval', 'clearInterval']
        });
        vi.mocked(fetch).mockReset();
        vi.mocked(fetch).mockReturnValue(new Promise(() => {
        }));
    });
    afterEach(() => {
        vi.clearAllTimers();
    });
    it('renders the empty input field', async () => {
        render(<CustomerAutocompleteTest />);
        expect(screen.getByRole('combobox')).toBeVisible();
    });
    it('allows input of a customer name', async () => {
        const user = userEvent.setup();
        render(<CustomerAutocompleteTest />);
        const input = screen.getByRole('combobox');
        await waitFor(async () => {
            input.focus();
            await user.type(input, 'test');
        });
        expect(input).toHaveValue('test');
    });
    it('loads results from the server', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testCustomersResponse));
        render(<CustomerAutocompleteTest />);
        const input = screen.getByRole('combobox');
        await user.type(input, 'test');
        await screen.findByText('5 customers found');
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('listbox')).toBeVisible();
        const options = screen.getAllByRole('option');
        expect(options.length).toBe(5);
    });
    it('renders a customer when selected', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testCustomersResponse));
        render(<CustomerAutocompleteTest />);
        const input = screen.getByRole('combobox');
        await user.type(input, 'test');
        await screen.findByText('5 customers found');
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1);
        const options = screen.getAllByRole('option');
        expect(options.length).toBe(5);
        expect(options[2]).toHaveTextContent('Chums LTD TEST');
        await user.click(options[2]);
        vi.advanceTimersByTime(1000);
        await screen.findByText('found 01-TESTHUR');
        // expect(screen.findByText('01-TESTHUR')).toBeVisible();
    });
    it('allows up/down and selects a customer on enter', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testCustomersResponse));
        render(<CustomerAutocompleteTest />);
        const input = screen.getByRole('combobox');
        await user.type(input, 'test');
        await screen.findByText('5 customers found');
        const options = screen.getAllByRole('option');
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
        await screen.findByText('found 01-TESTHUR');
    });
    it('closes popup when escape is pressed', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testCustomersResponse));
        const { container } = render(<CustomerAutocompleteTest />);
        const input = screen.getByRole('combobox');
        await user.type(input, 'test');
        await screen.findByText('5 customers found');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowDown}');
        await user.keyboard('{ArrowUp}');
        await user.keyboard('{Escape}');
        vi.advanceTimersByTime(1000);
        const popup = container.querySelector('[role="presentation"][data-open]');
        expect(popup).not.toBeInTheDocument();
    });
    it('opens and closes the popup when the toggle is clicked', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(testCustomersResponse));
        const { container } = render(<CustomerAutocompleteTest />);
        const input = screen.getByRole('combobox');
        const button = container.querySelector('button[aria-haspopup="listbox"]');
        expect(button).toBeInTheDocument();
        await user.type(input, 'test');
        await screen.findByText('5 customers found');
        let popup = document.querySelector('[role="presentation"][data-open]');
        expect(popup).toBeInTheDocument();
        await user.keyboard('{Escape}'); // close the popup
        vi.advanceTimersByTime(1000);
        popup = document.querySelector('[role="presentation"][data-open]');
        expect(popup).not.toBeInTheDocument();
        await user.click(button); // toggle open
        popup = document.querySelector('[role="presentation"][data-open]');
        expect(popup).toBeInTheDocument();
        await user.click(button); // toggle closed
        popup = document.querySelector('[role="presentation"][data-open]');
        expect(popup).not.toBeInTheDocument();
    });
});
