"use client";

import Link from "next/link";
import { wendy_one } from "@/app/lib/fonts";
import { Wrapp, Logo } from "./styles";
import WhatsappColored from "@/app/icons/WhatsappColored";

function Header() {
  return (
    <header>
      <Wrapp>
        <Logo className={wendy_one.className}>Lili da Dhaba</Logo>
        <Link href="https://api.whatsapp.com">
          <WhatsappColored />
        </Link>
      </Wrapp>
    </header>
  );
}

export default Header;
