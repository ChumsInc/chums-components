import {DataTableTHProps} from "../DataTableTH";
import {SortableTableField, SortProps} from "../types";

export interface SortableTHProps<T = any> extends DataTableTHProps {
    field: SortableTableField<T>,
    sorted?: boolean,
    ascending?: boolean,
    onClick: (sort: SortProps<T>) => void,
}

