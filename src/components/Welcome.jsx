import React from "react";
import { DisplayFlex, WelcomePage } from "../styled-components";
import { H1, Paragraph } from "../styled-components/text-styles";

const Welcome = () => {
  return (
    <>
      <WelcomePage id="welcome">
        <DisplayFlex alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
          <H1>Premium cursors</H1>
          <Paragraph>Now create any kind of cursors. Shape, image or circular text cursors with a handful of options!</Paragraph>
          <img src="https://www.hamidrezasepehr.com/projects/wp-custom-cursor/img/envato.svg" alt="envato" width={"50px"} />
        </DisplayFlex>
      </WelcomePage>
    </>
  );
};

export default Welcome;
