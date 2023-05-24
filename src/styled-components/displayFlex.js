import { styled } from "styled-components";

export const DisplayFlex = styled.div`
    display: flex;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    flex-direction: ${props => props.flexDirection};
`