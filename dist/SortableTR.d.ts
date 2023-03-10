import React, { TableHTMLAttributes } from 'react';
import { SortableTableField } from "./types";
export interface SortableTRProps extends TableHTMLAttributes<HTMLTableRowElement> {
    rowClassName?: string | object | ((any: any) => string | object);
    selected?: boolean;
    fields: SortableTableField[];
    row: any;
    trRef?: React.LegacyRef<HTMLTableRowElement>;
    onClick?: (any?: any) => any;
}
/**
 * @deprecated - use DataTableRow instead - the table row is the sorted item, not the sortable container
 * @param className
 * @param rowClassName
 * @param selected
 * @param fields
 * @param row
 * @param trRef
 * @param onClick
 * @param rest
 * @constructor
 */
declare const SortableTR: React.FC<SortableTRProps>;
export default SortableTR;
