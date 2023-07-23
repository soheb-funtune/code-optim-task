import React from "react";
import styled from "styled-components";

const CompoB = ({ counter, count }) => {
  return (
    <StyledButton onClick={() => counter(count + 20)}>CompoB 20+</StyledButton>
  );
};

export default CompoB;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px 15px;
  background: purple;
  color: white;
  border: none;
  margin: 5px;
`;
