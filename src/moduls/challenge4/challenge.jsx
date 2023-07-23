import React, { useState } from "react";
import styled from "styled-components";
import CompoA from "./compo-a.jsx";
import CompoB from "./compo-b.jsx";
import CompoC from "./compo-c.jsx";

const Challenge = () => {
  const [count, counter] = useState(0);
  return (
    <MainWrap>
      <Styledh2>Challenge 4</Styledh2>
      <h2 style={{ color: "red", textAlign: "center" }}>{count}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <CompoA count={count} counter={counter} />
        <CompoB count={count} counter={counter} />
        <CompoC count={count} counter={counter} />
      </div>
    </MainWrap>
  );
};

export default Challenge;

const MainWrap = styled.div`
  padding: 40px;
  margin: 30px auto;
  border-radius: 10px;
  justify-content: space-between;
  background: #e8e5e5;
  max-width: calc(100% - 65px);
  min-height: max-content;
  max-width: 1200px;
  @media (max-width: 767px) {
    padding: 25px;
    margin: 0px;
    border-radius: 0px;
  }
`;

const Styledh2 = styled.div`
  font-size: 30px;
  font-weight: 800;
`;
