import classNames from "classnames";
export interface PaginationProps {
    page: number;
    pages: number;
    filtered?: boolean;
    className?: string | classNames.ArgumentArray;
    maxButtons?: number;
    onSelectPage: (page: number) => void;
}
