import type {ReactNode} from "react";
import VersionProvider from "./VersionProvider";
import CurrentVersion from "./CurrentVersion";
import VersionUpdateToast from "./VersionUpdateToast";

export interface AppVersionProps {
    versionComponent?: ReactNode;
    toastComponent?: ReactNode;
    defaultInterval?: number;
    versionUrl?: string;
    onError?: (error: string | null) => void;
}

export default function AppVersion({
                                       versionComponent,
                                       toastComponent,
                                       defaultInterval,
                                       versionUrl,
                                       onError
                                   }: AppVersionProps) {
    return (
        <VersionProvider defaultInterval={defaultInterval} versionUrl={versionUrl} onError={onError}>
            {versionComponent || <CurrentVersion/>}
            {toastComponent || <VersionUpdateToast/>}
        </VersionProvider>
    )
}
AppVersion.displayName = 'AppVersion';
