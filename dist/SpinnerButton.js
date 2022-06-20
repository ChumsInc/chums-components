import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import styled from "styled-components";
const StyledButton = styled.button `
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
const SpinnerButton = ({ spinning = false, spinnerType = 'border', spinnerAfter = false, color = 'primary', size, className, children, disabled, ...rest }) => {
    const btnClassName = classNames(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-${color}`]: !!color,
        ['px-3']: !spinning
    });
    const spinnerClassName = classNames({
        [`spinner-${spinnerType}`]: !!spinnerType,
        [`spinner-${spinnerType}-sm`]: !size || ['sm'].includes(size),
        // "me-1": !spinnerAfter,
        // "ms-1": spinnerAfter,
        // "d-none": !spinning,
    });
    return (_jsxs(StyledButton, { className: btnClassName, disabled: spinning || disabled, ...rest, children: [spinning && !spinnerAfter && _jsx("span", { className: spinnerClassName, role: "status", "aria-hidden": "true" }), !spinnerAfter && _jsx("span", { className: "me-1" }), children, spinnerAfter && _jsx("span", { className: "me-1" }), spinning && spinnerAfter && _jsx("span", { className: spinnerClassName, role: "status", "aria-hidden": "true" })] }));
};
export default SpinnerButton;
//# sourceMappingURL=SpinnerButton.js.map