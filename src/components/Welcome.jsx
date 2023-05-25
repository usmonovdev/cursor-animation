import React from "react";
import { WelcomePage } from "../styled-components";
import { H1 } from "../styled-components/text-styles";
import Cursor1 from "../cursors/Cursor1";

const Welcome = () => {
  return (
    <WelcomePage id="welcome">
      <Cursor1 elementId={"welcome"} />
      <H1>Custom Cursor</H1>
    </WelcomePage>
  );
};

export default Welcome;
