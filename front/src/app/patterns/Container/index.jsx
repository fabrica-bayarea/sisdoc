"use client"
import styled from '@emotion/styled'
import React from 'react'

const ContainerStyled = styled.main`
  display: grid;
  grid-template-columns: 180px min(100vw - 180px);
  grid-template-rows: 80px min(100vh - 80px);
`;

const Container = ({children}) => {
  return (
    <ContainerStyled>
        {children}
    </ContainerStyled>
  )
}

export default Container