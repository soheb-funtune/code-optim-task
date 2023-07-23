import React from "react";
import styled from "styled-components";

const CompoA = ({ counter, count }) => {
  return (
    <StyledButton onClick={() => counter(count + 2)}>CompoA +2</StyledButton>
  );
};

export default CompoA;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px 15px;
  background: purple;
  color: white;
  border: none;
  margin: 5px;
`;
