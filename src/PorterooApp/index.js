import React from "react";
import styled from "styled-components";
import Task from "./Task"
import pogo from "../Logo.png";
import { useFetch } from "../useFetchHook";

const Heading = styled("header")`
  padding: 10px;
  text-align: center;
`;

const LogoContainer = styled("div")`
  margin-bottom: 20px;
  max-width: 300px;
  margin: 0 auto;

`;

const Logo = styled("img")`
  margin-top: 2rem;
  margin-bottom: 20px;
  max-width: 300px;
  margin: 0 auto;

  @media (max-width: 425px) {
    max-width: 75vw;
  }
`;

const Col = styled("div")`
  min-width: 85vw;
  padding: 2rem;

  @media (min-width: 768px) {
    min-width: 300px;
    max-width: 400px;
  }

  h1,
  h2 {
    margin: 0;
  }
`;

// PORTER DUMMY DATA
const dummyUserData = {
  username: "Jim",
  id: 1
}

// TODO: remove routes dummy data
// - Routes
//     - GET porterRoute
//         - [{location: text, time: int}, ]
const data = [{ location: "Ward Green", time: 10 }, { location: "Lab", time: 10 }]

const NextTask = ({ location, time }) => {
  if (!location) return <p>No more jobs!</p>;
  return <p>{location}</p>
}
const TaskSection = ({ routes }) => {
  const [firstRoute, ...nextRoutes] = routes;

  return (
    <>
      <Task {...firstRoute} />
      <h4>Next jobs</h4>
      {nextRoutes.map(route => <NextTask {...route} />)}
    </>)
}

function App() {
  const { loading } = useFetch(
    `https://placeholder.com/porterRoute/${dummyUserData.id}`
  );

  return (
    <Col>
      <LogoContainer>
        <Logo src={pogo} alt="porteroo logo" />
      </LogoContainer><Heading>
        <h2>Porter</h2>
        <h1>{dummyUserData.username}</h1>
      </Heading>
      <main>{loading ? <h2>Loading Porteroo data...</h2> : <TaskSection routes={data} />}</main>
    </Col>
  );
}

export default App;
