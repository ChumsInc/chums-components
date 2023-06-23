import {DataTableField} from "../types";
import classNames from "classnames";

export interface DataTableTHProps {
    field: DataTableField,
    className?: string | classNames.Argument,
}
