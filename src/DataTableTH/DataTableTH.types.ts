import {DataTableField} from "../types";
import classNames from "classnames";

export interface DataTableTHProps<T = any> {
    field: DataTableField<T>,
    className?: string | classNames.Argument,
}
