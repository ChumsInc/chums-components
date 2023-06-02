import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import Alert from "../Alert";
import { loadVersion } from "./api";
/**
 *
 * @param {string} path Path to package.json
 * @param {number} [checkInterval] Minutes between version checks
 * @param {BootstrapColor} defaultColor = 'light'
 * @param {BootstrapColor} changedColor = 'warning'
 * @constructor
 */
const AppVersion = ({ path = './package.json', checkInterval, defaultColor = 'light', changedColor = 'warning' }) => {
    const [version, setVersion] = useState(null);
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState(false);
    const timer = useRef(0);
    useEffect(() => {
        handleCheckVersion().catch(err => console.log(err?.message));
        if (checkInterval) {
            timer.current = window.setInterval(handleCheckVersion, checkInterval * 60 * 1000);
        }
        return () => {
            window.clearInterval(timer.current);
        };
    }, []);
    const handleCheckVersion = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const nextVersion = await loadVersion(path);
        if (!!nextVersion && !!version) {
            setChanged(true);
        }
        setVersion(nextVersion);
        setLoading(false);
    };
    const color = changed ? changedColor : defaultColor;
    return (_jsx("div", { onClick: handleCheckVersion, children: _jsxs(Alert, { color: color, title: "Version", canDismiss: changed, onDismiss: () => setChanged(false), children: [_jsx("span", { className: "me-3", children: version }), changed && _jsx("em", { children: "Update Available" })] }) }));
};
export default AppVersion;
//# sourceMappingURL=AppVersion.js.map