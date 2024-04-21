import type { Metadata } from "next";
import { grandstander } from "./lib/fonts";
import StylesProvider from "./styles/StylesProvider";

export const metadata: Metadata = {
  title: "Lili da Dhaba",
  description:
    "",
  keywords: ["Bacalhau", "Bolinho", "Massa", "Bolinho de bacalhau"],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  metadataBase: new URL("https://lilidaribeira.com.br"),
  openGraph: {
    title: "Lili da Dhaba",
    description:
      "!",
    type: "website",
    url: "https://lilidaribeira.com.br",
    siteName: "Lili da Ribeira",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={grandstander.className}>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  );
}
