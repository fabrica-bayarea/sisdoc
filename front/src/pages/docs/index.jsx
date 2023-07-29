"use client";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { flexCenter } from "../../global/utils/flexbox";
import Doc from "../../components/Doc";

const DocsStyled = styled.section`
  ${flexCenter}
  height: 100%;
  padding-top: 20px;
  flex-wrap: wrap;
  gap: 40px;
  margin: auto;
  .warning {
    margin: auto;
  }
`;

const Docs = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const getDocs = async () => {
      const resJSON = await fetch("/api/docs");
      const res = await resJSON.json();
      setDocs(res.docs);
    };
    getDocs();
  }, []);
  return (
    <DocsStyled>
      {docs.length == 0 ? (
        <span className="warning">Sem documentos</span>
      ) : (
        docs.map((doc) => (
          <Doc
            key={doc.id}
            name={doc.name}
            description={doc.description}
            date={new Date(doc.date).toLocaleDateString()}
            type={doc.type}
          />
        ))
      )}
    </DocsStyled>
  );
};

export default Docs;
