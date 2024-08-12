import {DataTableField} from "../types";
import classNames from "classnames";

export interface DataTableTHProps<T = unknown> {
    field: DataTableField<T>,
    className?: string | classNames.Argument,
}
