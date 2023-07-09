"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {
  greyPrimary100,
  greyPrimary200,
  whitePrimary100,
} from "../../global/template/palette";
import { FiLogOut } from "react-icons/fi";
import {
  flexAround,
  flexCenter,
  flexColumnBetween,
  flexColumnCenter,
} from "../../global/utils/flexbox";
import { transition200 } from "../../global/utils/transition";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { AiFillFileText, AiFillFileAdd } from "react-icons/ai";

const Aside = () => {
  const [active, setActive] = useState(true);
  const [width, setWidth] = useState(180);
  let AsideStyled = styled.aside`
    min-width: ${width}px;
    max-width: ${width}px;
    padding: 20px 0px;
    position: relative;
    background: ${whitePrimary100};
    height: 100vh;
    ${transition200}
    ${flexColumnBetween}
    .logo {
      ${flexCenter}
      gap:12px;
      color: black;
    }
    .btnActive {
      cursor: pointer;
      ${flexCenter}
      position: absolute;
      right: -26px;
      border-radius: 0px 5px 5px 0px;
      background: ${whitePrimary100};
      width: 24px;
      height: 60px;
      bottom: 0;
      border: 1px solid ${greyPrimary200};
      border-left: none;
    }
    nav {
      ${flexColumnBetween}
      min-height:200px;
      ul {
        ${flexColumnCenter}
        gap: 12px;
        li {
          a {
            ${transition200}
            ${flexCenter}
          p {
              width: 140px;
              text-align: center;
            }
            gap: 8px;
            border-radius: 12px;
            padding: 10px;
            font-size: 14px;
            color: black;
            .icon {
              font-size: 28px;
            }
            &:hover {
              color: aliceblue;
              background: #d92f34;
            }
          }
          &:nth-child(1) {
            a {
              color: aliceblue;
              background: #d92f34;
            }
          }
        }
      }
    }
    .nav-false {
      p,
      h1 {
        display: none;
      }
      .info {
        img {
          display: none;
        }
      }
    }
    .nav-true {
      li {
        a {
          width: 146px;
        }
      }
    }
    .info {
      ${flexColumnCenter}
      .btn {
        ${flexCenter}
        width:100%;
        p {
          text-align: center;
        }
        gap: 12px;
        border-radius: 12px;
        padding: 12px;
        font-size: 14px;
        color: black;
        .icon {
          font-size: 20px;
        }
      }
    }
    .info-false {
      img {
        display: none;
      }
      p {
        display: none;
      }
    }
    .info-true {
      img {
        display: block;
      }
    }
  `;
  useEffect(() => {
    setWidth(active ? 180 : 60);
  }, [active]);
  const handleActive = () => {
    setActive(active == true ? false : true);
  };
  return (
    <AsideStyled>
      <nav className={`nav-${active}`}>
        <Link href="/" className="logo">
          <Image src="/logo.png" width={42} height={48} />
          <h1>DocMente</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <AiFillFileAdd className="icon" />
              <p>Adicionar</p>
            </Link>
          </li>
          <li>
            <Link href="/docs">
              <AiFillFileText className="icon" />
              <p>Documentos</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`info info-${active}`}>
        <Image src="/file.png" width={160} height={160} />
        <button className="btn">
          <FiLogOut className="icon" />
          <p>Sair</p>
        </button>
      </div>
      <button className="btnActive" onClick={handleActive}>
        {active ? <AiFillCaretLeft /> : <AiFillCaretRight />}
      </button>
    </AsideStyled>
  );
};

export default Aside;
