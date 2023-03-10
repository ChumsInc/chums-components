/// <reference types="react" />
import classNames from "classnames";
import { DataTableField } from "./types";
export interface DataTableTHProps {
    field: DataTableField;
    className?: string | classNames.ArgumentArray;
}
declare const DataTableTH: ({ field, className, }: DataTableTHProps) => JSX.Element;
export default DataTableTH;
