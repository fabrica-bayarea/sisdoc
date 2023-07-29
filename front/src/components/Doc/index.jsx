"use client";
import { greyPrimary200, whitePrimary100 } from "../../global/template/palette";
import { flexCenter, flexColumnCenter } from "../../global/utils/flexbox";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";

const DocStyled = styled.div`
  background: ${whitePrimary100};
  min-width: 230px;
  max-width: 240px;
  height: 246px;
  padding: 40px;
  border-radius: 40px;
  position: relative;
  box-shadow: 10px 10px 10px #e8eaec;
  flex: 1;
  h3 {
    font-size: 18px;
  }
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
  .category-projeto {
    background: #d289e2;
    box-shadow: 0px 8px 10px -4px #d289e2;
  }
  .category-lembretes {
    background: #fa8036;
    box-shadow: 0px 8px 10px -4px #fa8036;
  }
  .category-trabalho {
    background: #17c3a5;
    box-shadow: 0px 8px 10px -4px #17c3a5;
  }
  .category-estudos {
    background: #db6868;
    box-shadow: 0px 8px 10px -4px #db6868;
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

const Doc = ({ id, name, description, date, type }) => {
  const [category, setCategory] = useState([]);
  return (
    <DocStyled className="doc">
      <span className={`category category-${type}`}></span>
      <h3>{name}</h3>
      <div className="dice">
        <p>{description}</p>
        <p className="date">
          <MdDateRange className="icon" />
          {date}
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
