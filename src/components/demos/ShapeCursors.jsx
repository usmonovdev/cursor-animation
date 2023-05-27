import React from "react";
import { H1, H3, Paragraph } from "../../styled-components/text-styles";
import Cursor1 from "../../cursors/shapeCursors/Cursor1";
import { CursorCard, CursorCardBody, DisplayFlex, DisplayGrid } from "../../styled-components";
import dollar from "../../assets/icon-5.png"

const ShapeCursors = () => {
  return (
    <DisplayFlex flexDirection={"column"} gap={"10px"}>
      <H1 alignment={"center"}>Shape Cursors</H1>
      <Paragraph alignment={"center"}>18 shapes, 15 styles</Paragraph>
      <DisplayGrid>
        <CursorCard id="cursor1">
          <Cursor1 elementId={"cursor1"} />
            <section>
              <img src={dollar} alt="dollar icon" />
            </section>
            <CursorCardBody>
              <H3>Cursor 1</H3>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eligendi?</Paragraph>
            </CursorCardBody>
        </CursorCard>

        <CursorCard id="cursor2">
          <Cursor1 elementId={"cursor2"} />
            <section>
              <img src={dollar} alt="dollar icon" />
            </section>
            <CursorCardBody>
              <H3>Cursor 1</H3>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eligendi?</Paragraph>
            </CursorCardBody>
        </CursorCard>

        <CursorCard id="cursor3">
          <Cursor1 elementId={"cursor3"} />
            <section>
              <img src={dollar} alt="dollar icon" />
            </section>
            <CursorCardBody>
              <H3>Cursor 1</H3>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eligendi?</Paragraph>
            </CursorCardBody>
        </CursorCard>
      </DisplayGrid>
    </DisplayFlex>
  );
};

export default ShapeCursors;
