import { styled } from "styled-components";

export const DisplayFlex = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    flex-direction: ${props => props.flexDirection};
    gap: ${props => props.gap}
`