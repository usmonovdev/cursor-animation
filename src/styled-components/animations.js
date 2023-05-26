import { keyframes, styled } from "styled-components";

const animation = keyframes`
    0% {
        transform: translateY(0px)
    }
    100% {
        transform: translateY(-15px)
    }
`

export const Animation = styled.img`
    animation: ${animation} 1500ms alternate infinite;
`