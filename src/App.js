import React from "react"
import { GlobalStyle, Theme } from "./styled-components/globalStyle";
import { ThemeProvider } from "styled-components";
import { Container } from "./styled-components/container";
import Welcome from "./components/Welcome";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Welcome />
      </Container>
    </ThemeProvider>
  );
}

export default App