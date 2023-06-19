import React from 'react'
import style from './header.module.css'
import styled from '@emotion/styled'
const Header = () => {
  const HeaderStyled = styled.header`
    grid-area: 1/2/2/2;
  `;
  return (
    <HeaderStyled className={style.header}>
      <h1>Header</h1>
    </HeaderStyled>
  )
}

export default Header