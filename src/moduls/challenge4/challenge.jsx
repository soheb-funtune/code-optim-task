import React, { useState } from "react";
import CompoA from "./compo-a.jsx";
import CompoB from "./compo-b.jsx";
import CompoC from "./compo-c.jsx";

const Challenge = () => {
  const [count, counter] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px",
      }}
    >
      <h3>Challenge 4</h3>
      <h2 style={{ color: "purple" }}>{count}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        <CompoA count={count} counter={counter} />
        <CompoB count={count} counter={counter} />
        <CompoC count={count} counter={counter} />
      </div>
    </div>
  );
};

export default Challenge;
