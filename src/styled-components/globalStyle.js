import { createGlobalStyle } from "styled-components";
import Noise from "../assets/noise.gif";
import Cursor1 from "../assets/cursor-1.png";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        width: 100vw;
        height: 100vh;
        background-color: #13131d;
        color: white;
        cursor: url(${Cursor1}), auto;
    };

    body::before {
        content: '';
        position: absolute;
        z-index: -1;
        opacity: .05;
        width: 100%;
        height: 100%;
        background-image: url(${Noise});
        background-color: #639;
    };
`

export const Theme = {
    body: '#fff6f1',
    primaryBlue: "#00a3ff",
    primaryBlackBlue: "#212e48",
    white: "#ffffff",
};