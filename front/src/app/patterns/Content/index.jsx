"use client";
import React from "react";
import styled from "@emotion/styled";
import { greyPrimary100 } from "@/app/global/template/palette";
const ContantStyled = styled.main`
  grid-area: 2/2/2/2;
  background: ${greyPrimary100};
  border: 2px solid #ebeced;
  border-radius: 40px 0px 0px 0px;
`;
const Content = ({ children }) => {
  return <ContantStyled>{children}</ContantStyled>;
};

export default Content;
