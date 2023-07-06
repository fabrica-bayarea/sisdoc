"use client";
import { Global, css } from "@emotion/react";

const style = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
