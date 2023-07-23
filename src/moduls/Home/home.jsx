import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Badge } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

import { TodoData } from "../json-data.js";
import AddData from "../AddData/add-data.jsx";
import EditData from "../EditData/edit-data.jsx";
import ListItem from "../ListItem/list-item.jsx";

const Home = () => {
  const [data, setData] = useState(TodoData || []);
  const [addShow, setAddShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .catch((err) => console.log({ err }));
      // let res2 = new Array(4);
      let res2 = res
        ?.map(({ title, completed }) => ({
          task: title,
          priority: "Low",
          progress: completed ? "Done" : "To_Do",
        }))
        ?.slice(0, 10);
      setData([...data, ...res2]);
      console.log("api", res2);
    };

    fetchData();
  }, []);

  const handleAction = (e, item, index) => {
    // event.preventDefault();
    if (e === "D") {
      const del = data?.filter((ele) => ele?.task !== item?.task);
      console.log({ del });
      setData(del);
    }
    if (e === "E") {
      setEdit(index);
      setShowEdit(true);
      console.log({ index });
    }
  };
  return (
    <MainWrap>
      <TopDiv>
        <Styledh2>Task List</Styledh2>

        <StyledBtn onClick={() => setAddShow(true)}>
          {" "}
          <AiOutlinePlus style={{ marginRight: "5px" }} />
          Add Task
        </StyledBtn>
      </TopDiv>
      <TodoList>
        {data?.map((item, index) => (
          <ListItem item={item} index={index} handleAction={handleAction} />
        ))}
      </TodoList>
      {addShow && (
        <AddData
          show={addShow}
          setShow={setAddShow}
          data={data}
          setData={setData}
        />
      )}
      {showEdit && (
        <EditData
          show={showEdit}
          edit={edit}
          setShow={setShowEdit}
          data={data}
          setData={setData}
        />
      )}
    </MainWrap>
  );
};

export default Home;

const MainWrap = styled.div`
  padding: 40px;
  margin: 30px auto;
  border-radius: 10px;
  justify-content: space-between;
  background: #e8e5e5;
  max-width: calc(100% - 65px);
  min-height: 100vh;
  max-width: 1200px;
  @media (max-width: 767px) {
    padding: 25px;
    margin: 0px;
    border-radius: 0px;
  }
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Styledh2 = styled.div`
  font-size: 30px;
  font-weight: 800;
`;
const TodoList = styled.div`
  margin-top: 20px;
`;
const StyledBtn = styled.button`
  background: purple;
  color: white;
`;
