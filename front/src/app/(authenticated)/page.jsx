"use client";
import styled from "@emotion/styled";
import Doc from "../components/Doc";
import { flexCenter, flexColumnCenter } from "../global/utils/flexbox";

const HomeStyled = styled.section`
  height: 100%;
  .docs {
    ${flexCenter}
    flex-wrap:wrap;
    gap: 20px;
    margin-top: 18px;
  }
  .description {
    margin: 60px 0px;
    padding: 0px 20px;
    table {
      width: 100%;
      tr {
        td,
        th {
          width: 220px;
          border-bottom: 1px solid #c6c6c6;
          text-align: left;
          padding: 20px 0px;
          &:nth-child(6) {
            border: none;
            text-align: right;
            width: 80px;
          }
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <HomeStyled>
      <div className="filters"></div>
      <div className="docs">
        <Doc />
        <Doc />
        <Doc />
        <Doc />
      </div>
      <div className="description">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Última modificação</th>
              <th>Tamanho</th>
              <th>Proprietário</th>
              <th>Membros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>folha de trabalho</td>
              <td>há três horas</td>
              <td>2 MB</td>
              <td>Vinith</td>
              <td>img</td>
              <td>⁝</td>
            </tr>
            <tr>
              <td>Slides do projeto</td>
              <td>há três horas</td>
              <td>2 MB</td>
              <td>Vinith</td>
              <td>img</td>
              <td>⁝</td>
            </tr>
            <tr>
              <td>folha de trabalho</td>
              <td>há três horas</td>
              <td>2 MB</td>
              <td>Vinith</td>
              <td>img</td>
              <td>⁝</td>
            </tr>
            <tr>
              <td>folha de trabalho</td>
              <td>há três horas</td>
              <td>2 MB</td>
              <td>Vinith</td>
              <td>img</td>
              <td>⁝</td>
            </tr>
          </tbody>
        </table>
      </div>
    </HomeStyled>
  );
}
