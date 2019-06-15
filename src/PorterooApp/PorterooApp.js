import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Heading = styled("header")`
  padding: 10px;
`;

const TypeHeading = styled("header")`
  text-decoration: underline;
  font-weight: 700;
  padding-bottom: .2rem;
`;

const Card = styled("div")`
  padding: 1rem;
  background-color: lightgray;
  max-width: 80%;
`;

const TravelInfo = styled("div")`
  display: flex;
  justify-content: space-between;
`;

// DUMMY DATA
const dummyUserData = {
  username: "Porter Jim"
}

const nextCheckin = ['3', '4', '2']

const previousCheckin = '4'

const wardNames = {
  1: 'Ward Blue',
  2: "Ward Red",
  3: "Ward Green",
  4: "Lab"
}

// Distance between wards in minutes
const distances = {
  4: {
    3: 10
  }
}

function App() {
  const [type, updateType] = useState(null) // delivery or collection

  useEffect(() => {
    if (nextCheckin[0] === '4') {
      updateType('Delivery')
    } else {
      updateType('Collection')
    }

    // TODO: No longer disable next line once nextCheckin updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextCheckin])



  const getDeadline = () => {
    const currentDate = new Date();
    const timeBetweenDest = distances[previousCheckin][nextCheckin[0]]
    const deadline = new Date(currentDate.getTime() + timeBetweenDest * 60000)
    return deadline.toTimeString().substr(0, 5)
  }

  return (
    <>
      <Heading>
        <h1>Hello, {dummyUserData.username}</h1>
      </Heading>
      <main>
        <Card>
          <TypeHeading>{type}</TypeHeading>
          <TravelInfo>
            <div>
              <p>{wardNames[previousCheckin]} to</p>
              <p>{wardNames[nextCheckin[0]]}</p>
            </div>
            <div>
              <p>By</p>
              <div>{getDeadline()}</div>
            </div>
          </TravelInfo>
        </Card>
      </main>
    </>
  );
}

export default App;
