import React from "react";
import classNames from "classnames";
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
    className?: string | classNames.ArgumentArray;
    onSelect: (id?: string) => void;
    onClose?: (id?: string) => void;
}
declare const _default: React.NamedExoticComponent<TabItemProps>;
export default _default;
