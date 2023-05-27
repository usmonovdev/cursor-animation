import { styled } from "styled-components";
import { Large } from "./breakpoints";

export const Card = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 200ms;
    &:active {
        transform: scale(0.8)
    };
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
    section {
        background: ${props => props.theme.blackBlue};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
            height: 100%;
            transition: 200ms;
            @media (max-width: ${Large}) {
                width: 50%;
            }
        }
    };
`

export const CardSection = styled.div`
    padding: 10px;
    background-color: ${props => props.theme.primaryBlackBlue};
    border-radius: 10px;
`

export const CardBody = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`