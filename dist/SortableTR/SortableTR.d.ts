/// <reference types="react" />
import { SortableTRProps } from "./SortableTR.types";
/**
 * @deprecated - use DataTableRow instead - the table row is the sorted item, not the sortable container
 */
declare const SortableTR: ({ className, rowClassName, selected, fields, row, trRef, onClick, ...rest }: SortableTRProps) => JSX.Element;
export default SortableTR;
