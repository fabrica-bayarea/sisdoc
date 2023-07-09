"use client";
import styled from "@emotion/styled";
import {
  flexBetween,
  flexCenter,
  flexColumnCenter,
} from "../../global/utils/flexbox";

const ContainerStyled = styled.main`
  overflow: hidden;
  height: 100vh;
  ${flexBetween}
  .structure {
    ${flexColumnCenter}
    flex: 1;
  }
`;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
