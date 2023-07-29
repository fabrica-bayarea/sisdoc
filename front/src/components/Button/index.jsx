import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  cursor: pointer;
  color: aliceblue;
  background: #d92f34;
  border-radius: 12px;
  min-width: 146px;
  padding: 10px;
`;

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
