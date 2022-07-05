import React from "react";
export interface Tab {
    id: string;
    title: string;
    /** Bootstrap icon className */
    icon?: string;
    canClose?: boolean;
    disabled?: boolean;
}
export interface TabItemProps extends Tab {
    active?: boolean;
    className?: string | object;
    onSelect: (id?: string) => void;
    onClose?: (id?: string) => void;
}
declare const _default: React.NamedExoticComponent<TabItemProps>;
export default _default;
