import React from "react";
import classNames from "classnames";
import {commaFormatter} from "../utils/utils";
import {PageButtonProps} from "./PageButton.types";

const CurrentPageButton = ({
                               page,
                               label = null
                           }: PageButtonProps) => {
    return (
        <li className={classNames('page-item active')}>
            <span className="page-link">{label ?? commaFormatter(page)}</span>
        </li>
    )
};

export default CurrentPageButton
