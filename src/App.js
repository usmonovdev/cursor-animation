import React from "react"
// import AnimatedCursor from "./components/AnimatedCursor";
import { GlobalStyle, Theme } from "./styled-components/globalStyle";
import { ThemeProvider } from "styled-components";
import { Container } from "./styled-components/container";
import Welcome from "./components/Welcome";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      {/* <AnimatedCursor /> */}
      <GlobalStyle />
      <Container>
        <Welcome />
      </Container>
    </ThemeProvider>
  );
}

export default App