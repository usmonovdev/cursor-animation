import React from "react";
import {
  CursorCard,
  CursorCardBody,
  DisplayFlex,
  DisplayGrid,
} from "../../styled-components";
import { H1, H3, Paragraph } from "../../styled-components/text-styles";
import photo from "../../assets/icon-7.png";
import Premium1 from "../../cursors/premiumCursors/Premium1";

const PremiumCursors = () => {
  return (
    <DisplayFlex flexDirection={"column"}>
      <H1 alignment={"center"}>Premium Cursors</H1>
      <DisplayGrid>
        {/* CURSOR 1 */}
        <CursorCard id="premium1">
          <Premium1 elementId={"premium1"} />
          <section>
            <img src={photo} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>Cursor 1</H3>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, eligendi?
            </Paragraph>
          </CursorCardBody>
        </CursorCard>
      </DisplayGrid>
    </DisplayFlex>
  );
};

export default PremiumCursors;
