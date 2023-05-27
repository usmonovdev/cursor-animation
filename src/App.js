import React from "react"
import { GlobalStyle, Theme } from "./styled-components/globalStyle";
import { ThemeProvider } from "styled-components";
import { Container } from "./styled-components/container";
import Welcome from "./components/Welcome";
import Features from "./components/Features";
import Demo from "./components/Demo";
import { DisplayFlex } from "./styled-components";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <DisplayFlex flexDirection={"column"} gap={"30px"}>
          <Welcome />
          <Features />
          <Demo/>
        </DisplayFlex>
      </Container>
    </ThemeProvider>
  );
}

export default App