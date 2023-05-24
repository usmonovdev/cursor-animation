import { styled } from "styled-components";

export const Ancor = styled.a`
    text-decoration: none;
    color: ${props => props.color || props.theme.primaryBlue}
`