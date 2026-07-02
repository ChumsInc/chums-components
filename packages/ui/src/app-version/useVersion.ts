import {useContext} from "react";
import VersionContext from "./VersionContext";

export const useVersion = () => {
    const context = useContext(VersionContext);
    if (!context) {
        throw new Error('useVersion must be used within a VersionProvider');
    }
    return context;
}
