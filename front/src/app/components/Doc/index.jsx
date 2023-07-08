"use client";
import { greyPrimary200, whitePrimary100 } from "../../global/template/palette";
import { flexCenter, flexColumnCenter } from "../../global/utils/flexbox";
import styled from "@emotion/styled";
import React from "react";
import { MdDateRange } from "react-icons/md";

const DocStyled = styled.div`
  background: ${whitePrimary100};
  max-width: 230px;
  height: 246px;
  padding: 40px;
  border-radius: 40px;
  position: relative;
  box-shadow: 10px 10px 10px #e8eaec;
  .category {
    position: absolute;
    top: -30px;
    left: 46px;
    background: #5096f7;
    box-shadow: 0px 8px 10px -4px #70a5ea;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
  .dice {
    ${flexColumnCenter}
    gap:14px;
    font-size: 14px;
    p {
      ${flexCenter}
      gap:6px;
    }
    .date {
      color: ${greyPrimary200};
      font-size: 12px;
    }
    .icon {
      font-size: 16px;
    }
  }
  .members {
    ${flexCenter}
    gap:6px;
    .member {
      width: 18px;
      height: 18px;
      background: ${greyPrimary200};
      border-radius: 100%;
    }
  }
`;

const Doc = () => {
  return (
    <DocStyled>
      <span className="category"></span>
      <h2>Doc</h2>
      <div className="dice">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="date">
          <MdDateRange className="icon" />
          06/07/2023
        </p>
        <div className="members">
          <span className="member"></span>
          <span className="member"></span>
          <span className="member"></span>
        </div>
      </div>
    </DocStyled>
  );
};

export default Doc;
