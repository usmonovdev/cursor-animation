import { styled } from "styled-components";

export const CursorStyle = styled.div`
    position: fixed;
    top: ${props => props.y + "px" || 0};
    left: ${props => props.x + "px" || 0};
    width: ${props => props.width + "px"};
    height: ${props => props.height + "px"};
    background-color: ${props => props.background || props.theme.primaryBlue};
    border-radius: ${props => props.gradus};
    border: ${props => props.border || "none"};
    transition-duration: ${props => props.tduration + "s" || "250ms"};
    transition-timing-function: ${props => props.tfunction || "ease-out"};
    transform: ${props => props.isScale ? `scale(1.4)` : `scale(1)`};
    opacity: ${props => props.opacity || "1"};
    pointer-events: none;
    z-index: 10000;
`