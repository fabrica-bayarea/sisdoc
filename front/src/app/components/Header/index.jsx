"use client";
import { greyPrimary100, whitePrimary100 } from "@/app/global/template/palette";
import { flexBetween, flexCenter } from "@/app/global/utils/flexbox";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUserCircle, BiBell } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const HeaderStyled = styled.header`
  ${flexBetween}
  background:${whitePrimary100};
  padding: 20px 40px;
  .settings {
    ${flexCenter}
    gap:26px;
    li {
      ${flexCenter}
      background: ${greyPrimary100};
      width: 40px;
      height: 40px;
      border-radius: 100%;
      a {
        ${flexCenter}
        font-size:22px;
        color: black;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="info">
        <h1>Hi, Asaas </h1>
        <p>home / </p>
      </div>
      <ul className="settings">
        <li>
          <Link href="#">
            <BsSearch className="icon" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <BiBell className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/users">
            <BiSolidUserCircle className="icon" />
          </Link>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
