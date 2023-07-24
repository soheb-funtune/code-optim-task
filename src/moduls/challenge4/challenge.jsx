import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// Higher-Order Component
const withIncrement = (BaseComponent, incrementValue) => {
  const WithIncrement = (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount((prevCount) => prevCount + incrementValue);
    };

    return (
      <BaseComponent count={count} onIncrement={handleIncrement} {...props} />
    );
  };

  return WithIncrement;
};

const ComponentA = ({ count, onIncrement }) => {
  return (
    <div>
      <h2>Component A</h2>
      <p>Count: {count}</p>
      <StyledButton onClick={onIncrement}>Increment by Two</StyledButton>
    </div>
  );
};

const ComponentB = ({ count, onIncrement }) => {
  return (
    <div>
      <h2>Component B</h2>
      <p>Count: {count}</p>
      <StyledButton onClick={onIncrement}>Increment by Twenty</StyledButton>
    </div>
  );
};

const ComponentC = ({ count, onIncrement }) => {
  return (
    <div>
      <h2>Component C</h2>
      <p>Count: {count}</p>
      <StyledButton onClick={onIncrement}>Increment by Hundred</StyledButton>
    </div>
  );
};

const ComponentAWithIncrement = withIncrement(ComponentA, 2);
const ComponentBWithIncrement = withIncrement(ComponentB, 20);
const ComponentCWithIncrement = withIncrement(ComponentC, 100);

const Challenge = () => {
  return (
    <Wrap>
      <ComponentAWithIncrement />

      <ComponentBWithIncrement />

      <ComponentCWithIncrement />
    </Wrap>
  );
};

export default Challenge;

const Wrap = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-direction: column;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px 15px;
  background: purple;
  color: white;
  border: none;
  margin: 5px;
  margin: 10px auto;
`;
