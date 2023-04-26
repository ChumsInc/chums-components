import React from "react";
import classNames from "classnames";
import {commaFormatter} from "../utils/utils";
import {PageButtonProps} from "./PageButton.types";

const SelectablePageButton = ({
                                  page,
                                  label = null,
                                  disabled = false,
                                  onClick
                              }: PageButtonProps) => {
    const handleClick = (ev: React.MouseEvent) => {
        ev.preventDefault();
        if (onClick) {
            onClick(page);
        }
    };
    return (
        <li className={classNames('page-item', {disabled: disabled})}>
            <a href="#" className='page-link' onClick={handleClick}>{label || commaFormatter(page)}</a>
        </li>
    )
};
export default SelectablePageButton
