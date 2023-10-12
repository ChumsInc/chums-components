import { HTMLAttributes } from "react";
import { BootstrapSize } from "../types";
export interface RowsPerPageProps extends Omit<HTMLAttributes<HTMLSelectElement>, 'onChange'> {
    value: number;
    pageValues?: number[];
    bsSize?: BootstrapSize;
    className?: string;
    onChange: (value: number) => void;
}
