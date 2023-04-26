import { DataTableTHProps } from "../DataTableTH";
import { SortableTableField, SortProps } from "../types";
export interface SortableTHProps extends DataTableTHProps {
    field: SortableTableField;
    sorted?: boolean;
    ascending?: boolean;
    onClick: (sort: SortProps) => void;
}
