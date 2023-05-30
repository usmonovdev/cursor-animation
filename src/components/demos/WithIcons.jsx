import React from "react";
import { CursorCard, CursorCardBody, DisplayFlex, DisplayGrid } from "../../styled-components";
import { H1, H3, Paragraph } from "../../styled-components/text-styles";
import icon from "../../assets/icon-6.png";
import WithIcons1 from "../../cursors/withIcons/WithIcons1";
import WithIcons2 from "../../cursors/withIcons/WithIcons2";
import WithIcons3 from "../../cursors/withIcons/WithIcons3";
import WithIcons4 from "../../cursors/withIcons/WithIcons4";

const WithIcons = () => {
  return (
    <DisplayFlex flexDirection={"column"} gap={"20px"}>
      <H1 alignment={"center"}>With Icons</H1>
      <DisplayGrid>
        {/* CURSOR 1 */}
        <CursorCard id="withIcons1">
          <WithIcons1 elementId={"withIcons1"} />
          <section>
            <img src={icon} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>With Icons 1</H3>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, eligendi?
            </Paragraph>
          </CursorCardBody>
        </CursorCard>
        {/* CURSOR 2 */}
        <CursorCard id="withIcons2">
          <WithIcons2 elementId={"withIcons2"} />
          <section>
            <img src={icon} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>With Icons 2</H3>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, eligendi?
            </Paragraph>
          </CursorCardBody>
        </CursorCard>
        {/* CURSOR 3 */}
        <CursorCard id="withIcons3">
          <WithIcons3 elementId={"withIcons3"} />
          <section>
            <img src={icon} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>With Icons 3</H3>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, eligendi?
            </Paragraph>
          </CursorCardBody>
        </CursorCard>
        {/* CURSOR 4 */}
        <CursorCard id="withIcons4">
          <WithIcons4 elementId={"withIcons4"} />
          <section>
            <img src={icon} alt="dollar icon" />
          </section>
          <CursorCardBody>
            <H3>With Icons 4</H3>
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

export default WithIcons;