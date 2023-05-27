import React from "react";
import { features } from "../data/features";
import { H3, Paragraph } from "../styled-components/text-styles";
import { Card, CardBody, CardSection, DisplayGrid } from "../styled-components";

const Features = () => {

    return (
        <DisplayGrid id="card">
            {features.map((feature) => {
                return (
                    <Card key={feature.id}>
                        <CardSection>
                            <section>
                                <img src={feature.icon} alt={feature.title} />
                            </section>
                            <CardBody>
                                <H3>{feature.title}</H3>
                                <Paragraph>{feature.info}</Paragraph>
                            </CardBody>
                        </CardSection>
                    </Card>
                );
            })}
        </DisplayGrid>
    );
};

export default Features;
