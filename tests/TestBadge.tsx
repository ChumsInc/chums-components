import React from 'react';
import {Badge} from "../src";
import {averageColor} from "../src/utils/utils";

const TestBadge = ({value}:{value: number}) => {
    const colorCode = '#' + Math.floor((value / 100) * 16777215).toString(16).padStart(6, '0');
    return (
        <Badge color="custom" colorCode={colorCode} >{colorCode} ({averageColor(colorCode).toFixed(2)})</Badge>
    )
}

export default TestBadge
