import { styled } from "styled-components";
import { Large } from "./breakpoints"

export const DisplayGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    justify-items: center;
    @media (max-width: ${Large}) {
        grid-template-columns: 1fr;
    };
`