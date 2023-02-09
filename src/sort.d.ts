export interface SortProps<T = any> {
    field: keyof T,
    ascending: boolean,
}
