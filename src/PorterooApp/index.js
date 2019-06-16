import React from "react";
import styled from "styled-components";
import Task from "./Task"
const Heading = styled("header")`
  padding: 10px;
`;

// DUMMY DATA
const dummyUserData = {
  username: "Porter Jim"
}


function App() {
  return (
    <>
      <Heading>
        <h1>Hello, {dummyUserData.username}</h1>
      </Heading>
      <main><Task /></main>
    </>
  );
}

export default App;
