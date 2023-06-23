import classNames from "classnames";
import { Tab } from "../types";
export interface TabItemProps extends Tab {
    active?: boolean;
    className?: string | classNames.Argument;
    onSelect: (id?: string) => void;
    onClose?: (id?: string) => void;
}
