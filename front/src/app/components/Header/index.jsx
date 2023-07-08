"use client";
import { useEffect } from "react";
import { greyPrimary100, whitePrimary100 } from "../../global/template/palette";
import { flexBetween, flexCenter } from "../../global/utils/flexbox";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  .info{
    a{
      color:black;
    }
  }
`;

const Header = () => {
  const pathname = usePathname();
  return (
    <HeaderStyled>
      <nav className="info">
        <Link href="/">
          <h1>Hi, Asaas </h1>
        </Link>
        <div>
          <Link href={`/`}>Home</Link>
          <Link href={`${pathname}`}>{pathname}</Link>
        </div>
      </nav>
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
