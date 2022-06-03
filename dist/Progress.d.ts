import React, { ReactNode } from 'react';
export interface ProgressProps {
    height?: string;
    style?: any;
    className?: string | object;
    children?: ReactNode;
}
declare const Progress: React.FC<ProgressProps>;
export default Progress;
