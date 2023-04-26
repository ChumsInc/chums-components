export interface PageButtonProps {
    page: number,
    label?: string | number | null,
    isCurrent?: boolean,
    disabled?: boolean,
    onClick?: (page: number) => void,
}
