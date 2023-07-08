"use client";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { greyPrimary200, whitePrimary100 } from "../../global/template/palette";
import { flexCenter, flexColumnCenter } from "../../global/utils/flexbox";
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
    ${flexCenter}
    align-items: start;
    position: relative;
    background: ${whitePrimary100};
    height: calc(100vh - 100px);
    ${transition200}
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
    ul {
      ${flexColumnCenter}
      gap: 12px;
      li {
        a {
          ${transition200}
          ${flexCenter}
          gap: 8px;
          border-radius: 12px;
          padding: 12px;
          font-size: 14px;
          color: black;
          .icon {
            font-size: 24px;
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
    .active-false {
      li {
        a {
          p {
            display: none;
          }
        }
      }
    }
    .active-true {
      li {
        a {
          width: 146px;
        }
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
      <ul className={`active-${active}`}>
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
      <button className="btnActive" onClick={handleActive}>
        {active ? <AiFillCaretLeft /> : <AiFillCaretRight />}
      </button>
    </AsideStyled>
  );
};

export default Aside;
