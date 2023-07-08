"use client";
import styled from "@emotion/styled";
import { flexBetween, flexCenter } from "../../global/utils/flexbox";

const ContainerStyled = styled.main`
  overflow: hidden;
  height: 100vh;
  .structure {
    ${flexBetween}
  }
`;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
