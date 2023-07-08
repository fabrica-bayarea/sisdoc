import Aside from "../components/Aside";
import Header from "../components/Header";
import GlobalStyle from "../global/GlobalStyle";
import head from "./head";
import Container from "../patterns/Container";
import Content from "../patterns/Content";
import Head from "next/head";
export const metadata = {
  description: "Um sistema de gerenciamento de documentos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <GlobalStyle />
      <body>
        <Container>
          <Header />
          <div className="structure">
            <Aside />
            <Content>{children}</Content>
          </div>
        </Container>
      </body>
    </html>
  );
}
