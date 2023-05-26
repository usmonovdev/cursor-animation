import { styled } from "styled-components";

export const Paragraph = styled.p`
    color: ${props => props.theme.white};
    opacity: 80%;
    text-align: ${props => props.alignment};
`