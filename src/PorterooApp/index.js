import React, { useState } from "react";
import styled from "styled-components";
import Task from "./Task"
import pogo from "../Logo.png";
import { useFetchGet } from "../fetch-util";
import { getDeadline } from "../utils/getDeadline"


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

const NextJob = styled("div")`
  background-color: lightgrey;
  padding: 1rem 2rem;
`

const Separator = styled("hr")`
  width: 100%;
  border-top: 20px;
  border-color: lightgrey;
  margin-top: 20px;
`


// PORTER DUMMY DATA
const dummyUserData = {
  username: "Jim",
  id: 1
}

// TODO: remove routes dummy data
// - Routes
//     - GET porterRoute
//         - [{location: text, time: int}, ]

// fetch request for location to ward name

// const wardNames = {
//   0: "Ward Green",
//   1: "Lab",
//   2: "Ward Red",
//   3: "Ward Blue"
// }

const NextTask = ({ location, time }) => {
  if (!location) return <p>No more jobs!</p>;
  return <NextJob>{getDeadline(time)} - {location === "Lab" ? `Delivery to ${location}` : `Collect from ${location}`}</NextJob>
}
const TaskSection = ({ routes, forceRefetchData }) => {
  const [firstRoute, ...nextRoutes] = routes;

  return (
    <>
      <Separator />
      <h4>Current job</h4>
      <Task {...firstRoute} forceRefetchData={forceRefetchData} porterId={dummyUserData.id} />
      <Separator />
      <h4>Next jobs</h4>
      {nextRoutes.map(route => <NextTask key={route.location + route.time} {...route} />)}
    </>)
}

const data = [{ location: "Ward Green", time: 10 }, { location: "Lab", time: 30 }, { location: "Ward Blue", time: 40 }]
const dataTwo = [{ location: "Lab", time: 30 }, { location: "Ward Blue", time: 40 }]

function App() {
  const [refetchData, forceRefetchData] = useState(false)
  const { loading } = useFetchGet(
    `https://placeholder.com/porterRoute/${dummyUserData.id}`, refetchData
  );

  // const routes = data.map(route => ({ location: wardNames[route.location] || "Unknown", time: route.time }))

  return (
    <Col>
      <LogoContainer>
        <Logo src={pogo} alt="porteroo logo" />
      </LogoContainer><Heading>
        <h2>Porter</h2>
        <h1>{dummyUserData.username}</h1>
      </Heading>
      <main>{loading ? <h2>Loading Porteroo data...</h2> : <TaskSection forceRefetchData={forceRefetchData} routes={refetchData ? dataTwo : data} />}</main>
    </Col>
  );
}

export default App;
