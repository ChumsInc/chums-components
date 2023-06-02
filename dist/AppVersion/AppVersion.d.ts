import { BootstrapColor } from "../types";
/**
 *
 * @param {string} path Path to package.json
 * @param {number} [checkInterval] Minutes between version checks
 * @param {BootstrapColor} defaultColor = 'light'
 * @param {BootstrapColor} changedColor = 'warning'
 * @constructor
 */
declare const AppVersion: ({ path, checkInterval, defaultColor, changedColor }: {
    path?: string | undefined;
    checkInterval?: number | undefined;
    defaultColor?: BootstrapColor | undefined;
    changedColor?: BootstrapColor | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default AppVersion;
