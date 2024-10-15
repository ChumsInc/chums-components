import React from 'react';
import classNames from "classnames";
import NavItem from "./NavItem";
import {NavListProps} from "./NavList.types";

/**
 * @deprecated Prefer react-bootstrap/Nav instead
 */
export default function NavList({
                                    variant,
                                    vertical,
                                    align,
                                    fill,
                                    items,
                                    currentTab,
                                    onChange,
                                    onClose,
                                    className,
                                    ...rest
                                }: NavListProps) {
    const navClassName = {
        'justify-content-center': align === 'center',
        'justify-content-end': align === 'end',
        'flex-column': vertical,
        'nav-tabs': variant === 'tabs',
        'nav-pills': variant === 'pills',
        'nav-underline': variant === 'underline',
        'nav-fill': fill === 'fill',
        'nav-justified': fill === 'justified',
    }
    return (
        <ul className={classNames('nav', navClassName, className)} {...rest}>
            {items.map(item => <NavItem key={item.id} {...item}
                                        active={currentTab === item.id}
                                        onSelect={onChange} onClose={onClose}/>)}
        </ul>
    )
}
