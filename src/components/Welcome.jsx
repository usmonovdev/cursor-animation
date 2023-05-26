import React from "react";
import { DisplayFlex, WelcomePage, Animation } from "../styled-components";
import { H1, Paragraph } from "../styled-components/text-styles";

const Welcome = () => {
  return (
    <>
      <WelcomePage>
        <DisplayFlex
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"5px"}
        >
          <Animation
            src="https://www.hamidrezasepehr.com/projects/wp-custom-cursor/img/envato.svg"
            alt="envato"
            width={"50px"}
          />
          <H1>Premium cursors</H1>
          <Paragraph alignment={"center"}>
            Now create any kind of cursors. Shape, image or circular <br /> text
            cursors with a handful of options!
          </Paragraph>
        </DisplayFlex>
      </WelcomePage>
    </>
  );
};

export default Welcome;
