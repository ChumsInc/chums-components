export interface VersionContextState {
    version: string | null;
    hasUpdate: boolean | string;
    status: 'idle' | 'loading';
    onClick: () => void;
    loadVersion: () => void;
}
declare const VersionContext: import("react").Context<VersionContextState | null>;
export default VersionContext;
//# sourceMappingURL=VersionContext.d.ts.map