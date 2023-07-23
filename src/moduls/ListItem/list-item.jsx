import React from "react";
import styled from "styled-components";
import { Row, Col, Badge } from "react-bootstrap";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const ListItem = ({ item, index, handleAction }) => {
  const { task, priority, progress } = item;
  return (
    <StyledRow>
      <Col lg={4} md={4} sm={4} xs={12}>
        <StyledHead>Task</StyledHead>
        <Styledh5>{task}</Styledh5>
      </Col>
      <Col lg={2} md={2} sm={2} xs={3}>
        <StyledHead>Priority</StyledHead>
        <Styledh5 colorr={priority}>{priority}</Styledh5>
      </Col>
      <Col lg={2} md={2} sm={2} xs={3}>
        <FlexDiv>
          <Badge bg="secondary">{progress?.split("_")?.join(" ")}</Badge>
        </FlexDiv>
      </Col>
      <Col lg={2} md={2} sm={2} xs={3}>
        <FlexDiv>
          <CircleDiv circle={progress?.split("_")?.join(" ")}>
            <EmptyCircle></EmptyCircle>
          </CircleDiv>
        </FlexDiv>
      </Col>
      <Col lg={2} md={2} sm={2} xs={3}>
        <FlexDiv>
          <LuEdit
            onClick={() => handleAction("E", item, index)}
            className="icons"
          />
          <RiDeleteBin6Line
            onClick={() => handleAction("D", item)}
            className="icons delete-icon"
          />
        </FlexDiv>
      </Col>
    </StyledRow>
  );
};

export default ListItem;

const StyledRow = styled(Row)`
  border-radius: 20px;
  margin: 10px 0px;
  padding: 10px 15px;
  background: white;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.01);
    box-shadow: -3px 0px 35px -14px rgba(5, 5, 5, 0.75);
    -webkit-box-shadow: -3px 0px 35px -14px rgba(5, 5, 5, 0.75);
    -moz-box-shadow: -3px 0px 35px -14px rgba(5, 5, 5, 0.75);
  }
`;

const StyledHead = styled.span`
  font-weight: 600;
  color: #b6b0b0;
  font-size: 14px;
`;
const Styledh5 = styled.h5`
  font-weight: 600;
  font-size: 16px;
  color: ${({ colorr }) =>
    colorr === "High"
      ? "#f60808"
      : colorr === "Medium"
      ? "#d7d705"
      : colorr === "Low"
      ? "#0dce0d"
      : "#3d3c3c"};

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
  .bg-secondary {
    background: lightgray !important;
    color: gray !important;
  }
  .icons {
    font-size: 20px;
    margin-left: 10px;
    font-size: 22px;
    @media (max-width: 767px) {
      font-size: 15px;
      margin-left: 5px;
    }
  }
  .delete-icon {
    color: #f44141;
    font-size: 25px;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
`;

const CircleDiv = styled.div`
  position: relative;
  /* background-color: red; */
  border-radius: 100%;
  ${({ circle }) =>
    circle === "Done"
      ? `border-top: 5px solid purple;
  border-right: 5px solid purple;
  border-bottom: 5px solid purple;
  border-left: 5px solid purple;`
      : circle === "In Progress"
      ? `border-top: 5px solid purple;
  border-right: 5px solid purple;
  border-bottom: 5px solid #a6a3a3;
  border-left: 5px solid #a6a3a3;`
      : `border-top: 5px solid #a6a3a3;
  border-right: 5px solid #a6a3a3;
  border-bottom: 5px solid #a6a3a3;
  border-left: 5px solid #a6a3a3;`}
`;
const EmptyCircle = styled.div`
  z-index: 99;
  background: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  @media (max-width: 767px) {
    width: 10px;
    height: 10px;
  }
`;
