import {createContext} from "react";

export interface VersionContextState {
    version: string|null;
    hasUpdate: boolean|string;
    status: 'idle' | 'loading';
    onClick: () => void;
    loadVersion: () => void;
}

const VersionContext = createContext<VersionContextState | null>(null);
export default VersionContext;
