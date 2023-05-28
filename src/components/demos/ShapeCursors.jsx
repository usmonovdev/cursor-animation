import React from "react";
import { H1, H3, Paragraph } from "../../styled-components/text-styles";
import Cursor1 from "../../cursors/shapeCursors/Cursor1";
import Cursor2 from "../../cursors/shapeCursors/Cursor2";
import { CursorCard, CursorCardBody, DisplayFlex, DisplayGrid } from "../../styled-components";
import dollar from "../../assets/icon-5.png"
import Cursor3 from "../../cursors/shapeCursors/Cursor3";
import Cursor4 from "../../cursors/shapeCursors/Cursor4";
import Cursor5 from "../../cursors/shapeCursors/Cursor5";

const ShapeCursors = () => {
  return (
    <DisplayFlex flexDirection={"column"} gap={"10px"}>
      <H1 alignment={"center"}>Shape Cursors</H1>
      <Paragraph alignment={"center"}>18 shapes, 15 styles</Paragraph>
      <DisplayGrid>
        {/* CURSOR 1 */}
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
        {/* CURSOR 2 */}
        <CursorCard id="cursor2">
          <Cursor2 elementId={"cursor2"} />
          <section>
            <img src={dollar} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>Cursor 2</H3>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eligendi?</Paragraph>
          </CursorCardBody>
        </CursorCard>
        {/* CURSOR 3 */}
        <CursorCard id="cursor3">
          <Cursor3 elementId={"cursor3"} />
          <section>
            <img src={dollar} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>Cursor 3</H3>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eligendi?</Paragraph>
          </CursorCardBody>
        </CursorCard>
        {/* CURSOR 4 */}
        <CursorCard id="cursor4">
          <Cursor4 elementId={"cursor4"} />
          <section>
            <img src={dollar} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>Cursor 4</H3>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eligendi?</Paragraph>
          </CursorCardBody>
        </CursorCard>
        {/* CURSOR 5 */}
        <CursorCard id="cursor5">
          <Cursor5 elementId={"cursor5"} />
          <section>
            <img src={dollar} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>Cursor 5</H3>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eligendi?</Paragraph>
          </CursorCardBody>
        </CursorCard>
      </DisplayGrid>
    </DisplayFlex>
  );
};

export default ShapeCursors;
