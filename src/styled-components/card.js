import { styled } from "styled-components";
import { Large } from "./breakpoints";

export const Card = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.primaryBlackBlue};
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    gap: 20px;
    transition: 200ms;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 98%;
        height: 100%;
        background: red;
        z-index: -1;
        background-image: linear-gradient(100deg,#13131d,#0398ed);
        border-radius: 15px;
        transition: 300ms;
    }
    &:hover {
        &::before {
            transform: rotate(3deg);
            transform-origin: top left;
        }
        img {
            transform: scale(1.05)
        }
    }
    section {
        background: #1c2942;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
            height: fit-content;
            transition: 200ms;
            @media (max-width: ${Large}) {
                width: 50%;
            }
        }
    }
`

export const CardBody = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`