"use client"
import styled from '@emotion/styled';
import React from 'react'
import { flexCenter } from '../../global/utils/flexbox';

const UserStyled = styled.section`
  ${flexCenter}
  height: 100%;
  margin-top: 18px;
  flex-wrap: wrap;
  gap: 60px 20px;
`;
function User() {
  return (
    <UserStyled>
      <h1>Users</h1>
    </UserStyled>
  )
}

export default User;