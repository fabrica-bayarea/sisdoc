"use client";
import styled from "@emotion/styled";
import React from "react";
import {
  flexBetween,
  flexCenter,
  flexColumnCenter,
} from "../../global/utils/flexbox";
import Image from "next/image";
import Link from "next/link";

const LoginStyled = styled.section`
  ${flexBetween}
  height:100vh;
  .form,
  .description {
    ${flexColumnCenter}
    height: 100%;
    width: 50%;
  }
  .description {
    h1 {
      font-size: 40px;
      margin: 28px;
    }
  }
  .form {
    background: #d92f34;
    input {
      border-radius: 60px;
      width: 240px;
      border: none;
      padding: 16px;
      margin: 8px;
    }
    input[type="submit"] {
      cursor: pointer;
    }
  }
`;

const Login = () => {
  return (
    <LoginStyled>
      <div className="description">
        <h1>DocMente</h1>
        <Image src="/login.png" width={300} height={320} />
      </div>
      <div className="form">
        <form action="/home">
          <div>
            <input type="text" placeholder="Nome" />
          </div>
          <div>
            <input type="text" placeholder="Senha" />
          </div>
          <input type="submit" value="Entrar" />
        </form>
        <nav>
          <Link href="/">cadastre-se</Link>
        </nav>
      </div>
    </LoginStyled>
  );
};

export default Login;
