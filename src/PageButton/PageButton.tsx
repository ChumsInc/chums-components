import React from 'react';
import {PageButtonProps} from "./PageButton.types";
import CurrentPageButton from "./CurrentPageButton";
import SelectablePageButton from "./SelectablePageButton";

const PageButton = ({
                        page,
                        label = '',
                        disabled = false,
                        isCurrent = false,
                        onClick
                    }: PageButtonProps) => {
    return (
        isCurrent
            ? <CurrentPageButton page={page} label={label}/>
            : <SelectablePageButton page={page} label={label} disabled={disabled} onClick={onClick}/>
    )
};

export default PageButton;
