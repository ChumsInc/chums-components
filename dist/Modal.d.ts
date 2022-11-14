import React from "react";
import classNames from "classnames";
import { BootstrapSize } from "./types";
export interface ModalProps {
    title?: string;
    size?: BootstrapSize;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    canClose?: boolean;
    scrollable?: boolean;
    centered?: boolean;
    staticBackdrop?: boolean;
    dialogClassName?: string | classNames.ArgumentArray;
    visible?: boolean;
    onClose?: (any?: any) => any;
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
