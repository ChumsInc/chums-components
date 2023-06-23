import classNames from "classnames";

export interface PaginationProps {
    page: number,
    pages: number,
    filtered?: boolean,
    className?: string | classNames.Argument,
    maxButtons?: number,
    onSelectPage: (page: number) => void,
}
