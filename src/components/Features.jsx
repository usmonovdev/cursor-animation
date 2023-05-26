import React from "react";
import { features } from "../data/features";
import { H3, Paragraph } from "../styled-components/text-styles";
import { Card, DisplayFlex } from "../styled-components";

const Features = () => {
  return (
    <DisplayFlex flexDirection={"row"} justifyContent={"space-between"}>
        {features.map((feature) => {
            return (
                <Card>
                    <img src={feature.icon} alt={feature.title} />
                    <H3>{feature.info}</H3>
                </Card>
            );
        })}
    </DisplayFlex>
  );
};

export default Features;
