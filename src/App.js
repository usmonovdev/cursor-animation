import React from "react"
import AnimatedCursor from "./components/AnimatedCursor";
import { GlobalStyle, Theme } from "./styled-components/globalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AnimatedCursor />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App