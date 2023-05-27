import { createGlobalStyle } from "styled-components";
import cursor from "../assets/cursor-1.png"
import noise from "../assets/noise.gif"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
    };

    body {
        width: 100vw;
        height: 100vh;
        background-color: #13131d;
        color: white;
        overflow-x: hidden;
        cursor: url(${cursor}), auto;
    };

    body::before {
        content: '';
        position: fixed;
        top: 0;
        left:0;
        z-index: -1;
        opacity: .05;
        width: 100%;
        height: 100%;
        background-color: #639;
        background-image: url(${noise});
    };

    .cursor {
        position: fixed;
        pointer-events: none;
        z-index: 10000;
    };

    ::-webkit-scrollbar {
        display: none;
    };
`

export const Theme = {
    body: '#fff6f1',
    primaryBlue: "#00a3ff",
    primaryBlackBlue: "#212e48",
    blackBlue: "#1c2942",
    white: "#ffffff",
};