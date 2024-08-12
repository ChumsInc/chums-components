import React from 'react';
import classNames from "classnames";
import {ProgressProps} from "./Progress.types";

const Progress = ({
                      height,
                      className = '',
                      style,
                      children
                  }: ProgressProps) => {
    if (!style) {
        style = {};
    }
    if (height && !style.height) {
        style.height = height;
    }

    return (
        <div className={classNames('progress', className)} style={style}>
            {children}
        </div>
    )
}

export default Progress;
