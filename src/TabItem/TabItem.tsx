import React, {useEffect} from "react";
import classNames from "classnames";
import {TabItemProps} from "./TabItem.types";


const TabItem = ({
                     id,
                     title,
                     icon,
                     active,
                     canClose,
                     disabled,
                     className,
                     onSelect,
                     onClose,
                 }: TabItemProps) => {
    useEffect(() => {
        if (canClose && !onClose) {
            console.warn('TabItem: missing onClose handler for canClose = true');
        }
    }, [canClose, onClose]);

    const clickHandler = () => {
        if (disabled || active) {
            return;
        }
        onSelect(id);
    };

    const onClickClose = () => {
        if (canClose && !!onClose) {
            onClose(id);
        }
    }

    return (
        <li className="nav-item">
            <button className={classNames('nav-link', className, {active, disabled})}
                    tabIndex={disabled ? -1 : 0} onClick={clickHandler}>
                {!!icon && <span className={classNames('nav-item-icon me-1', icon)}/>}
                <span className="nav-item-text">{title}</span>
                {canClose && (
                    <span aria-label="Close" onClick={onClickClose} className="ms-2 bi-x-lg"/>
                )}
            </button>
        </li>
    )
}
export default TabItem;
