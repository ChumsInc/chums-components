import styled from "styled-components";
const PaginationUL = styled.ul `
    &.filtered {
        .page-item.active {
            .page-link {
                background-color: var(--bs-warning);
                border-color: var(--bs-warning);
                color: var(--bs-dark);
            }
        }
    }
`;
export default PaginationUL;
//# sourceMappingURL=PaginationUL.js.map