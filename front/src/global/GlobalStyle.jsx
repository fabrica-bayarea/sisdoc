import { Global, css } from "@emotion/react";

const style = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;