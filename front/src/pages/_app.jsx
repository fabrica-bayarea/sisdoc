import Aside from "../components/Aside";
import Header from "../components/Header";
import GlobalStyle from "../global/GlobalStyle";
import Container from "../patterns/Container";
import Content from "../patterns/Content";

export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Aside />
      <div className="structure">
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
      </div>
    </Container>
  );
}
