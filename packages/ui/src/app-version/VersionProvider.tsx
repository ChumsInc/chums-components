import {type ReactNode, startTransition, useCallback, useEffect, useMemo, useRef, useState} from "react";
import VersionContext, {type VersionContextState} from "./VersionContext";
import {fetchJSON} from "@chumsinc/ui-utils";

export interface VersionProviderProps {
    children: ReactNode;
    defaultInterval?: number;
    onError?: (error: string) => void;
    versionUrl?: string;
}

interface VersionResponse {
    version: string;
}

export default function VersionProvider({
                                            children,
                                            defaultInterval,
                                            versionUrl,
                                            onError
                                        }: VersionProviderProps) {
    const [version, setVersion] = useState<string | null>(null);
    const [status, setStatus] = useState<VersionContextState['status']>('idle');
    const [hasUpdate, setHasUpdate] = useState<boolean | string>(false);
    const intervalRef = useRef<number>(0);
    const abortController = useRef<AbortController | null>(null);
    const mounted = useRef<boolean>(false);
    const interval = defaultInterval ?? 60 * 60 * 1000; // 1 hour
    const url = versionUrl ?? './package.json';

    const loadVersion = useCallback(async (lastVersion?: string | null, onError?: VersionProviderProps['onError']) => {
        try {
            if (!window.navigator.onLine) {
                return;
            }
            abortController.current = new AbortController();
            setStatus('loading');
            const res = await fetchJSON<VersionResponse>(url, {
                cache: 'no-store',
                signal: abortController.current.signal
            });
            abortController.current = null;
            setStatus('idle');

            if (!lastVersion) {
                // handle initial load version
                setVersion(res?.version ?? null);
                setHasUpdate(false);
                return;
            }

            if (res?.version && res.version !== lastVersion) {
                setHasUpdate(res.version);
            }
        } catch (err: unknown) {
            console.log('VersionProvider.loadVersion() error', err);
            if (onError) {
                onError(err instanceof Error ? err.message : 'Error in VersionProvider.loadVersion()');
            }
            setStatus('idle');
        }
    }, [url]);

    useEffect(() => {
        return () => {
            window.clearInterval(intervalRef.current);
        }
    }, []);

    useEffect(() => {
        startTransition(() => {
            if (!mounted.current) {
                mounted.current = true;
                loadVersion(null, onError).catch(console.error);
            }
            if (interval > 0) {
                intervalRef.current = window.setInterval(loadVersion, interval);
            }
        })
        return () => {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
            }
        }
    }, [interval, onError, loadVersion])

    const clickHandler = useCallback(() => {
        if (abortController.current) {
            abortController.current.abort('User clicked reload button');
        }
        // clear the interval and start a new timer
        window.clearInterval(intervalRef.current);
        loadVersion(version, onError).catch(console.error);
        if (interval > 0) {
            intervalRef.current = window.setInterval(loadVersion, interval);
        }
    }, [version, onError, loadVersion, interval]);

    const value: VersionContextState = useMemo(() => {
        return {
            version,
            status,
            hasUpdate,
            onClick: clickHandler,
            loadVersion
        }
    }, [clickHandler, version, status, hasUpdate, loadVersion])

    return (
        <VersionContext value={value}>
            {children}
        </VersionContext>
    )
}
