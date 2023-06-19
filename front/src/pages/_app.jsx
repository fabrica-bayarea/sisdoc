import Aside from "@/components/Aside";
import Content from "@/components/Content";
import Header from "@/components/Header";
import GlobalStyles from "@/global/GlobalStyle";
import styled from "@emotion/styled";
export default function MyApp({ Component, pageProps }) {
  const Container = styled.main`
    display: grid;
    grid-template-columns: 180px min(100vw - 180px);
    grid-template-rows: 80px min(100vh - 80px);
  `;
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Aside />
    </Container>
  );
}
