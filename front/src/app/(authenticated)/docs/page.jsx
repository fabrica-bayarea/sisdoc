"use client";
import styled from "@emotion/styled";
import React from "react";
import { flexCenter } from "../../global/utils/flexbox";
import Doc from "../../components/Doc";

const DocsStyled = styled.section`
  ${flexCenter}
  height: 100%;
  margin-top: 18px;
  flex-wrap: wrap;
  gap: 60px 20px;
`;

const Docs = () => {
  return (
    <DocsStyled>
      <Doc />
      <Doc />
      <Doc />
      <Doc />
      <Doc />
      <Doc />
      <Doc />
      <Doc />
      <Doc />
      <Doc />
      <Doc />
      <Doc />
    </DocsStyled>
  );
};

export default Docs;
