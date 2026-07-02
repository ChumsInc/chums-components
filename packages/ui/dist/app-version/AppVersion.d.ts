import type { ReactNode } from "react";
export interface AppVersionProps {
    versionComponent?: ReactNode;
    toastComponent?: ReactNode;
    defaultInterval?: number;
    versionUrl?: string;
    onError?: (error: string | null) => void;
}
declare function AppVersion({ versionComponent, toastComponent, defaultInterval, versionUrl, onError }: AppVersionProps): import("react").JSX.Element;
declare namespace AppVersion {
    var displayName: string;
}
export default AppVersion;
//# sourceMappingURL=AppVersion.d.ts.map