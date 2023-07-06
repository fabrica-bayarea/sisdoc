
import Aside from "../components/Aside";
import Header from "../components/Header";
import GlobalStyle from "../global/GlobalStyle";
import head from "./head";
import Container from "../patterns/Container";
import Content from "../patterns/Content";
export const metadata = {
  title: "IESB",
  description: "Um sistema de gerenciamento de documentos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <GlobalStyle />
      <head />
      <body>
        <Container>
          <Aside />
          <Header />
          <Content>{children}</Content>
        </Container>
      </body>
    </html>
  );
}
