import React from 'react';
import classNames from "classnames";
import {ProgressBarProps} from "./ProgressBar.types";


const ProgressBar = ({
                         color = 'primary',
                         value = 100,
                         valueMin = 0,
                         valueMax = 100,
                         striped,
                         animated,
                         className = '',
                         style = {},
                         children,
                     }: ProgressBarProps) => {
    let width = 1 - ((valueMax - value) / (valueMax - valueMin));
    if (width < 0) {
        width = 0;
    } else if (width > 1) {
        width = 1;
    }
    const progressBarClassName = {
        'progress-bar': true,
        'progress-bar-striped': striped || animated,
        'progress-bar-animated': animated,
    }
    return (
        <div className={classNames(`bg-${color}`, {...progressBarClassName}, className)}
             role="progressbar" style={{width: `${width * 100}%`, ...style}}>
            {children || null}
        </div>
    )
}

export default ProgressBar;
