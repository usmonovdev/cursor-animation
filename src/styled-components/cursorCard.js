import { styled } from "styled-components";

export const CursorCard = styled.div`
    position: relative;
    cursor: none;
    width: 100%;
    height: 300px;
    background: ${props => props.theme.primaryBlackBlue};
    border-radius: 10px;
    padding: 10px;
    transition: 200ms;
    display: flex;
    flex-direction: column;
    section {
        pointer-events: none;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.blackBlue};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 150px;
            transition: 200ms;
            z-index: 0;
            pointer-events: none;
        }
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 98%;
        height: 100%;
        z-index: -1;
        background-image: linear-gradient(100deg,#13131d,#0398ed);
        border-radius: 15px;
        transition: 300ms;
    };
    &:hover {
        &::before {
            transform: rotate(3deg);
            transform-origin: top left;
        }
        img {
            transform: scale(1.05)
        }
    };
    p{
        pointer-events: none;
    }
`

export const CursorCardBody = styled.div`
    width: 100%;
    padding: 10px;
    pointer-events: none;
`