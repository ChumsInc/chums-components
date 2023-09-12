"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Alert_1 = __importDefault(require("../Alert"));
const api_1 = require("./api");
/**
 *
 * @param {string} path Path to package.json
 * @param {number} [checkInterval] Minutes between version checks
 * @param {BootstrapColor} defaultColor = 'light'
 * @param {BootstrapColor} changedColor = 'warning'
 * @constructor
 */
const AppVersion = ({ path = './package.json', checkInterval, defaultColor = 'light', changedColor = 'warning' }) => {
    const [version, setVersion] = (0, react_1.useState)(null);
    const [changed, setChanged] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const timer = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(() => {
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
        const nextVersion = await (0, api_1.loadVersion)(path);
        if (!!nextVersion && !!version) {
            setChanged(true);
        }
        setVersion(nextVersion);
        setLoading(false);
    };
    const color = changed ? changedColor : defaultColor;
    return ((0, jsx_runtime_1.jsx)("div", { onClick: handleCheckVersion, children: (0, jsx_runtime_1.jsxs)(Alert_1.default, { color: color, title: "Version", canDismiss: changed, onDismiss: () => setChanged(false), children: [(0, jsx_runtime_1.jsx)("span", { className: "me-3", children: version }), changed && (0, jsx_runtime_1.jsx)("em", { children: "Update Available" })] }) }));
};
exports.default = AppVersion;
//# sourceMappingURL=AppVersion.js.map