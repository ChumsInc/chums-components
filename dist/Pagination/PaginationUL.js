"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const PaginationUL = styled_components_1.default.ul `
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
exports.default = PaginationUL;
//# sourceMappingURL=PaginationUL.js.map