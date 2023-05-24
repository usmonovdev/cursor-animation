import { styled } from "styled-components";

export const CursorInner = styled.div`
    position: fixed;
    width: ${props => props.innerSize + "px"};
    height: ${props => props.innerSize + "px"};
    pointer-events: none;
    background-color: ${props => props.backgroundColor};
    transition: opacity 0.15s ease-in-out, transform 0.25s ease-in-out;
    border-radius: ${props => props.borderRadius};
    border: 2px solid ${props => props.theme.primaryBlue}
`