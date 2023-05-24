import { styled } from "styled-components";

export const H1 = styled.h1`
    color: ${props => props.color || props.theme.white};
    font-size: 40px;
`