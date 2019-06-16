import React from "react";
import styled from "styled-components";
import Task from "./Task"
import pogo from "../Logo.png";

const Heading = styled("header")`
  padding: 10px;
  text-align: center;
`;

const Logo = styled("img")`
margin-top: 2rem;
  margin-bottom: 20px;
  max-width: 300px;
  @media (max-width: 425px) {
    max-width: 75vw;
  }
`;

const Col = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h2 {
    margin: 0;
  }
`;

// DUMMY DATA
const dummyUserData = {
  username: "Jim",
  id: 1
}


function App() {
  return (
    <Col>
      <Logo src={pogo} alt="porteroo logo" />
      <Heading>
        <h2>Porter</h2>
        <h1>{dummyUserData.username}</h1>
      </Heading>
      <main><Task porterId={dummyUserData.id} /></main>
    </Col>
  );
}

export default App;
