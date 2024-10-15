"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  &.spinner-button {
    &:not(.spinning) {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .spinner-border,
    .spinner-grow {
      height: 1em;
      width: 1em;
    }
  }
`;
/**
 * @deprecated prefer react-bootstrap/SpinnerButton instead
 */
const SpinnerButton = ({ spinning = false, spinnerType = 'border', spinnerAfter = false, color = 'primary', size, className, children, disabled, ...rest }) => {
    const btnClassName = (0, classnames_1.default)(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-${color}`]: !!color,
        ['px-3']: !spinning
    });
    const spinnerClassName = (0, classnames_1.default)({
        [`spinner-${spinnerType}`]: !!spinnerType,
        [`spinner-${spinnerType}-sm`]: !size || ['sm'].includes(size),
        // "me-1": !spinnerAfter,
        // "ms-1": spinnerAfter,
        // "d-none": !spinning,
    });
    return ((0, jsx_runtime_1.jsxs)(StyledButton, { className: btnClassName, disabled: spinning || disabled, ...rest, children: [spinning && !spinnerAfter && (0, jsx_runtime_1.jsx)("span", { className: spinnerClassName, role: "status", "aria-hidden": "true" }), !spinnerAfter && (0, jsx_runtime_1.jsx)("span", { className: "me-1" }), children, spinnerAfter && (0, jsx_runtime_1.jsx)("span", { className: "me-1" }), spinning && spinnerAfter && (0, jsx_runtime_1.jsx)("span", { className: spinnerClassName, role: "status", "aria-hidden": "true" })] }));
};
exports.default = SpinnerButton;
//# sourceMappingURL=SpinnerButton.js.map