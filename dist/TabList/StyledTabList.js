"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledTabList = styled_components_1.default.ul `
    &.nav {
        .nav-item {
            .nav-link {
                .btn-close {
                    width: 0.75rem;
                    height: 0.75rem;
                    margin-left: 0.25rem;
                    line-height: 0.75rem;
                    font-size: 0.75rem;
                }
            }
        }
    }
`;
exports.default = StyledTabList;
//# sourceMappingURL=StyledTabList.js.map