import React from "react";
import CustomModal from "../../components/Modal/modal";
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const EditData = ({ show, setShow, data, setData, edit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: data[`${edit * 1}`] ? data[`${edit * 1}`] : {},
  });

  const onSubmit = (submitData) => {
    const editAll = data?.map((item, index) =>
      index * 1 === edit * 1 ? submitData : item
    );
    setData([...editAll]);
    console.log("called", editAll, submitData);
    setShow(false);
  };
  console.log("watch", watch(), data[`${edit * 1}`]);

  const AddForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row style={{ padding: "0px 10px" }}>
          <Col lg={6} m={6} sm={12}>
            <SingleItem>
              <label htmlFor="task">Task</label>
              <input
                placeholder="Enter Task"
                id="task"
                {...register("task", { required: "Field is Required!" })}
                type="text"
              />
              <small>{errors?.task ? errors?.task?.message : ""}</small>
            </SingleItem>
          </Col>
          <Col lg={6} m={6} sm={12}>
            <SingleItem>
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                {...register("priority", { required: "Field is Required!" })}
                type="select"
              >
                <option value={""}>Select</option>
                <option value={"High"}>High</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Low"}>Low</option>
              </select>
              <small>{errors?.priority ? errors?.priority?.message : ""}</small>
            </SingleItem>
          </Col>
          <Col lg={6} m={6} sm={12}>
            <SingleItem>
              <label htmlFor="Progress">Progress</label>
              <select
                id="Progress"
                {...register("progress", { required: "Field is Required!" })}
                type="select"
              >
                <option value={""}>Select</option>
                <option value={"To_Do"}>To Do</option>
                <option value={"Done"}>Done</option>
                <option value={"In_Progress"}>In Progress</option>
              </select>
              <small>{errors?.progress ? errors?.progress?.message : ""}</small>
            </SingleItem>
          </Col>
        </Row>
        <Row>
          <ButtonWrap>
            <button type="submit">Submit</button>
          </ButtonWrap>
        </Row>
      </form>
    );
  };
  return (
    <>
      <CustomModal
        show={show}
        setShow={setShow}
        title={"Edit Task"}
        content={AddForm}
      />
    </>
  );
};

export default EditData;

const SingleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    font-size: 15px;
    font-weight: 700;
  }
  input,
  select {
    border-radius: 4px;
    padding: 5px;
    border: 1px solid black;
  }
  small {
    color: #db0d0d;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  button {
    margin-top: 10px;
    padding: 5px 15px;
    background: purple;
    color: white;
    border: none;
  }
`;
