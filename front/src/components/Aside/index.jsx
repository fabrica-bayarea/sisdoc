import React from 'react'
import style from './Aside.module.css';
import styled from '@emotion/styled';
const Aside = () => {
  const AsideStyled = styled.aside`
    grid-area: 1/1/3/1;
  `;
  return (
    <AsideStyled className={style.aside}>
      <h1>Aside</h1>
    </AsideStyled>
  )
}

export default Aside