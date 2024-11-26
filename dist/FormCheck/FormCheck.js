"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
/**
 * @deprecated Prefer react-bootstrap/FormCheck instead
 */
exports.default = react_1.default.forwardRef(function FormCheck({ type = "checkbox", id, label, checked, onChange, inline = false, className, disabled, title, children, ...props }, ref) {
    const _id = (0, react_1.useId)();
    const inputId = id ?? _id;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)("form-check", className, { "form-check-inline": inline }), children: [(0, jsx_runtime_1.jsx)("input", { type: type, className: "form-check-input", id: inputId, checked: checked, disabled: disabled, title: title, ref: ref, onChange: onChange, ...props }), (0, jsx_runtime_1.jsx)("label", { className: "form-check-label", htmlFor: inputId, title: title, children: children ?? label ?? 'Label Missing' })] }));
});
//# sourceMappingURL=FormCheck.js.map