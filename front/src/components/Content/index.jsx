import styled from '@emotion/styled';
import React from 'react'

const Content = ({children}) => {
  const ContantStyled = styled.main`
    grid-area: 2/2/2/2;
    background:black;
  `;
  return <ContantStyled>{children}</ContantStyled>;
}

export default Content