import React from 'react';
import { BootstrapBGColor } from "./types";
export interface BadgeProps {
    color: BootstrapBGColor;
    pill?: boolean;
    text?: string;
    className?: string | object;
    description?: string;
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<BadgeProps>;
export default _default;
