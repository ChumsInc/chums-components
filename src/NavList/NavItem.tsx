import React, {useEffect} from 'react';
import classNames from "classnames";
import {NavItemProps} from "./NavList.types";

/**
 * @deprecated Prefer react-bootstrap/NavItem instead
 */
export default function NavItem({
                                    id,
                                    title,
                                    icon,
                                    className,
                                    element,
                                    active = false,
                                    disabled = false,
                                    onSelect,
                                    canClose,
                                    onClose,
                                }: NavItemProps) {
    useEffect(() => {
        if (!onSelect && !element) {
            console.warn('NavItem:onSelect is required if element is undefined');
        }
    }, []);

    const closeHandler = () => {
        if (canClose && onClose !== undefined) {
            onClose(id);
        }
    }

    const clickHandler = () => {
        if (disabled || active || !onSelect) {
            return;
        }
        onSelect(id);
    };

    if (element) {
        return (
            <li className="nav-item">
                {element}
            </li>
        )
    }
    return (
        <li className="nav-item">
            <button type="button" disabled={disabled} role="tab" tabIndex={disabled ? -1 : 0}
                    className={classNames('nav-link', {active, disabled}, className)}
                    onClick={clickHandler}>
                {!!icon && <span className={classNames('nav-item-icon me-1', icon)}/>}
                <span className="nav-item-text">{title}</span>
                {canClose && (
                    <span aria-label="Close" onClick={closeHandler} className="ms-2 bi-x-lg"/>
                )}
            </button>
        </li>
    )
}
