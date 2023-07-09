"use client";
import React from "react";
import styled from "@emotion/styled";
import { greyPrimary100 } from "../../global/template/palette";
const ContantStyled = styled.main`
  overflow-y: auto;
  background: ${greyPrimary100};
  border: 2px solid #ebeced;
  border-radius: 40px 0px 0px 0px;
  padding: 30px 40px;
  width: 100%;
  height: max(100vh - 100px);
`;
const Content = ({ children }) => {
  return <ContantStyled>{children}</ContantStyled>;
};

export default Content;
