import { styled } from "styled-components";

export const Card = styled.div`
    width: 30%;
    height: 500px;
    background-color: ${props => props.theme.primaryBlackBlue};
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    img {
        width: 100%;
        height: fit-content;
        background: #1c2942;
        border-radius: 10px;
    }
`