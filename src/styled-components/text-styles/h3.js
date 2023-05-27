import { styled } from "styled-components";

export const H3 = styled.h3`
    font-size: 20px;
    color: ${props => props.color || props.theme.white};
    text-align: ${props => props.alignment};
    pointer-events: none;
`