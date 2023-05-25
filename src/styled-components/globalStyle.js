import { createGlobalStyle } from "styled-components";
import cursor from "../assets/cursor-1.png"

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
        position: absolute;
        z-index: -1;
        opacity: .05;
        width: 100%;
        height: 100%;
        background-color: #639;
    };

    .cursor {
        position: fixed;
        pointer-events: none;
    }
`

export const Theme = {
    body: '#fff6f1',
    primaryBlue: "#00a3ff",
    primaryBlackBlue: "#212e48",
    white: "#ffffff",
};