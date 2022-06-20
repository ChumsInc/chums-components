import React, {ButtonHTMLAttributes} from "react";
import {BootstrapButtonColor, BootstrapButtonSize} from "./types";
import classNames from "classnames";
import styled from "styled-components";

const StyledButton = styled.button`
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

export interface SpinnerButtonProps extends ButtonHTMLAttributes<any> {
    spinning?: boolean,
    spinnerType?: 'border' | 'grow',
    spinnerAfter?: boolean,
    color?: BootstrapButtonColor,
    size?: BootstrapButtonSize,
}

const SpinnerButton: React.FC<SpinnerButtonProps> = ({
                                                         spinning = false,
                                                         spinnerType = 'border',
                                                         spinnerAfter = false,
                                                         color = 'primary',
                                                         size,
                                                         className,
                                                         children,
                                                         disabled,
                                                         ...rest
                                                     }) => {
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

    return (
        <StyledButton className={btnClassName} disabled={spinning || disabled} {...rest}>
            {spinning && !spinnerAfter && <span className={spinnerClassName} role="status" aria-hidden="true"/>}
            {!spinnerAfter && <span className="me-1" />}
            {children}
            {spinnerAfter && <span className="me-1" />}
            {spinning && spinnerAfter && <span className={spinnerClassName} role="status" aria-hidden="true"/>}
        </StyledButton>
    );
}

export default SpinnerButton;
