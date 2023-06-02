import React, {useEffect, useRef, useState} from 'react';
import {BootstrapColor} from "../types";
import Alert from "../Alert";
import {loadVersion} from "./api";


/**
 *
 * @param {string} path Path to package.json
 * @param {number} [checkInterval] Minutes between version checks
 * @param {BootstrapColor} defaultColor = 'light'
 * @param {BootstrapColor} changedColor = 'warning'
 * @constructor
 */
const AppVersion = ({path = './package.json', checkInterval, defaultColor = 'light', changedColor = 'warning'}: {
    path?: string;
    checkInterval?: number;
    defaultColor?: BootstrapColor
    changedColor?: BootstrapColor;
}) => {
    const [version, setVersion] = useState<string | null>(null);
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const timer = useRef<number>(0);

    useEffect(() => {
        handleCheckVersion().catch(err => console.log(err?.message));
        if (checkInterval) {
            timer.current = window.setInterval(handleCheckVersion, checkInterval * 60 * 1000);
        }
        return () => {
            window.clearInterval(timer.current);
        }
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
    }
    const color = changed ? changedColor : defaultColor;
    return (
        <div onClick={handleCheckVersion}>
            <Alert color={color} title="Version" canDismiss={changed} onDismiss={() => setChanged(false)}>
                <span className="me-3">{version}</span>
                {changed && <em>Update Available</em>}
            </Alert>
        </div>
    )
}

export default AppVersion;
