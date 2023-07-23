import React from "react";
import styled from "styled-components";

const CompoC = ({ counter, count }) => {
  return (
    <StyledButton onClick={() => counter(count + 100)}>
      CompoC +100
    </StyledButton>
  );
};

export default CompoC;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px 15px;
  background: purple;
  color: white;
  border: none;
  margin: 5px;
`;
