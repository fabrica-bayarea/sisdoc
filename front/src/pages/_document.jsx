import { Html, Head, Main, NextScript } from "next/document";
import GlobalStyle from "../global/GlobalStyle";
export default function Document() {
  return (
    <Html lang="pt-br">
      <GlobalStyle />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
