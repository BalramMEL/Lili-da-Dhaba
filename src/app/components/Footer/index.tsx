"use client";

import Link from "next/link";
import {
  Address,
  Card,
  Container,
  Copyright,
  Location,
  Logo,
  Media,
} from "./styles";

import Animation from "./animation";
import { nunito, wendy_one } from "@/app/lib/fonts";
import Whatsapp from "@/app/icons/Whatsapp";
import Facebook from "@/app/icons/Facebook";

function Footer() {
  Animation();
  return (
    <Container>
      <Logo className="logo">
        <Link href="#header">
          <span className={wendy_one.className}>Lili da Dhaba</span>
          <span className={nunito.className}>
            Dough for Cod Dumplings
          </span>
        </Link>
      </Logo>
      <Media>
        <li>
          <Link href="https://www.facebook.com">
            <Facebook />
          </Link>
        </li>
        <li>
          <Link href="https://api.whatsapp.com">
            <Whatsapp />
          </Link>
        </li>
      </Media>
      <Location>
        <Card className="card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.126695690903!2d75.35966987527051!3d19.876871381499726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3e7057e4ae9%3A0x5cb61f7305e4e625!2sThe%20hotdog%20Wale!5e0!3m2!1sen!2sin!4v1713725814002!5m2!1sen!2sin"
            width="100%"
            height="400px"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen={false}
            loading="lazy"
          />
          <Address id="address" className={nunito.className}>
            Tulsi Arcade, behind Starbucks, CIDCO Cannought, M G M, Aurangabad, Maharashtra 431005
          </Address>
          <Copyright id="copyright" className={nunito.className}>
            © Copyright {new Date().getFullYear()} -{" "}
            {new Date().getFullYear() + 1} | Lili da Dhaba | All Rights Reserved 
          </Copyright>
        </Card>
      </Location>
    </Container>
  );
}

export default Footer;
