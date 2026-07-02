import { type HTMLAttributes } from "react";
import { type ButtonProps, type SpinnerProps } from "react-bootstrap";
export interface CurrentVersionProps extends ButtonProps {
    versionContainerProps?: HTMLAttributes<HTMLSpanElement>;
    spinnerProps?: SpinnerProps;
}
export default function CurrentVersion({ versionContainerProps, spinnerProps, ...alertProps }: CurrentVersionProps): import("react").JSX.Element;
//# sourceMappingURL=CurrentVersion.d.ts.map