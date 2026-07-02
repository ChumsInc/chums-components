import { act, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useVersion, VersionProvider } from "./index";
import CurrentVersion from "./CurrentVersion";
import VersionUpdateToast from "./VersionUpdateToast";
import Stack from "react-bootstrap/esm/Stack";
import { useState } from "react";
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
const TestVersionElements = () => {
    const { status } = useVersion();
    return (<div>
            {status === 'idle' && <div>Doing nothing</div>}
            {status === 'loading' && <div>Loading the version...</div>}
            <Stack direction="horizontal" gap={2}>
                <CurrentVersion data-testid="version-text"/>
                <VersionUpdateToast />
            </Stack>
        </div>);
};
const TestAppVersion = () => {
    const [error, setError] = useState(null);
    return (<VersionProvider onError={setError} defaultInterval={5000}>
            {error && (<div className="alert alert-danger">Failed to load version.</div>)}
            <TestVersionElements />
        </VersionProvider>);
};
describe('AppVersion Lifecycle', () => {
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
    it('renders the initial loader on mount immediately', async () => {
        render(<TestAppVersion />);
        expect(screen.getByTestId('version-text')).toHaveTextContent(/loading/i);
    });
    it('resolves and renders the initial async fetch', async () => {
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse({ version: '1.0.0' }));
        render(<TestAppVersion />);
        await waitFor(() => {
            expect(screen.getByTestId('version-text')).toHaveTextContent('1.0.0');
        });
    });
    it('polls the network via interval cycles and refreshes the version', async () => {
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse({ version: '1.0.0' }));
        render(<TestAppVersion />);
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1);
        await waitFor(() => {
            expect(screen.getByTestId('version-text')).toHaveTextContent('1.0.0');
        });
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1);
        act(() => {
            vi.advanceTimersByTime(100);
        });
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1);
        act(() => {
            vi.advanceTimersByTime(5000);
        });
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(2);
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse({ version: '1.0.1' }));
        act(() => {
            vi.advanceTimersByTime(5000);
        });
        await waitFor(() => {
            expect(screen.getByTestId('version-text')).toHaveTextContent('1.0.1');
        });
        expect(vi.mocked(fetch)).toHaveBeenCalledTimes(3);
    });
    it('checks for updates and shows a toast', async () => {
        const user = userEvent.setup();
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse({ version: '1.0.0' }));
        render(<TestAppVersion />);
        await waitFor(() => {
            expect(screen.getByTestId('version-text')).toHaveTextContent('1.0.0');
        });
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse({ version: '1.0.1' }));
        const versionButton = screen.getByRole('button');
        await user.click(versionButton);
        expect(screen.getByTestId('version-text')).toHaveTextContent('1.0.0');
        expect(screen.getByText('Update Available')).toBeVisible();
    });
    it('catches failed network requests and shows an error message', async () => {
        vi.mocked(fetch).mockResolvedValueOnce(createFetchResponse(null, 500));
        render(<TestAppVersion />);
        await waitFor(() => {
            expect(screen.getByText('Failed to load version.')).toBeInTheDocument();
        });
    });
});
