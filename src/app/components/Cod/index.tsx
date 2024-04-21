"use client";

import { Button, Container, Content, Paragraph, Title } from "./styles";
import Animation from "./animation";
import { nunito } from "@/app/lib/fonts";

function Cod() {
  Animation();

  return (
    <Container id="cod">
      <Content>
        <Title>Authentic paste</Title>
        <Paragraph>
          Lili da Dhaba uses the best flavor of the foods. Perfect for parties, get-togethers with friends and special family moments
        </Paragraph>
        <Button
          href="https://api.whatsapp.com/"
          className={nunito.className}
        >
          Order your pasta
        </Button>
      </Content>
    </Container>
  );
}

export default Cod;
