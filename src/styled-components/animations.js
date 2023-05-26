import { keyframes, styled } from "styled-components";

const animation = keyframes`
    0% {
        transform: scale(1)
    }
    100% {
        transform: scale(1.2)
    }
`

export const Animation = styled.img`
    animation: ${animation} 1500ms alternate infinite;
`