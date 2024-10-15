import React from "react";
import {default as Progress} from "../Progress/Progress";
import {default as ProgressBar} from "../ProgressBar/ProgressBar";
import {LoadingProgressProps} from "./LoadingProgressBar.types";

/**
 * @deprecated Prefer react-bootstrap/ProgressBar instead
 */
const LoadingProgress = ({
                             height,
                             className,
                             style,
                             color = 'primary',
                             value = 100,
                             valueMin = 0,
                             valueMax = 100,
                             striped,
                             animated,
                             children
                         }: LoadingProgressProps) => {
    return (
        <Progress height={height} className={className} style={style}>
            <ProgressBar color={color}
                         value={value} valueMin={valueMin} valueMax={valueMax}
                         striped={striped} animated={animated}>
                {children}
            </ProgressBar>
        </Progress>
    )
}
export default LoadingProgress;
