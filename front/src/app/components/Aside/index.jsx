"use client"
import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link';
import { whitePrimary100 } from '@/app/global/template/palette';
import { flexCenter } from '@/app/global/utils/flexbox';

const AsideStyled = styled.aside`
  ${flexCenter}
  grid-area: 1/1/3/1;
  background: ${whitePrimary100};
`;

const Aside = () => {
  return (
    <AsideStyled>
        <ul>
            <li>
                <Link href="/docs">Documentos</Link>
            </li>
            <li>
                <Link href="#">link</Link>
            </li>
            <li>
                <Link href="#">link</Link>
            </li>
            <li>
                <Link href="#">link</Link>
            </li>
        </ul>
    </AsideStyled>
  )
}

export default Aside