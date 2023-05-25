import { styled } from "styled-components";

export const CursorStyle = styled.div`
    position: fixed;
    top: ${props => props.y + "px" || 0};
    left: ${props => props.x + "px" || 0};
    width: ${props => props.width + "px"};
    height: ${props => props.height + "px"};
    background-color: ${props => props.background || props.theme.primaryBlue};
    border-radius: ${props => props.gradus};
    border: ${props => props.border || "none"}
    pointer-events: none;
    transition: 150ms ease-out;
`