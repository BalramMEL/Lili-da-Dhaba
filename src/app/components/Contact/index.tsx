"use client";
import { nunito } from "@/app/lib/fonts";
import { Button, Container, Content, Title } from "./styles";
import Animation from "./animation";

function Contact() {
  Animation();

  return (
    <Container id="contact">
      <Content>
        <Title>Get in touch and place your order now!</Title>
        <Button
          href="https://api.whatsapp.com/send?phone=5521994056843&text=Quero%20reservar%20a%20minha%20encomenda"
          className={nunito.className}
        >
          GET IN TOUCH
        </Button>
      </Content>
    </Container>
  );
}

export default Contact;
