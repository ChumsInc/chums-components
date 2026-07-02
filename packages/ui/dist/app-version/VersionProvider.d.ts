import { type ReactNode } from "react";
export interface VersionProviderProps {
    children: ReactNode;
    defaultInterval?: number;
    onError?: (error: string) => void;
    versionUrl?: string;
}
export default function VersionProvider({ children, defaultInterval, versionUrl, onError }: VersionProviderProps): import("react").JSX.Element;
//# sourceMappingURL=VersionProvider.d.ts.map