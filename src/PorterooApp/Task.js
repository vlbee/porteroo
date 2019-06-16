import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TypeHeading = styled("header")`
  text-decoration: underline;
  font-weight: 700;
  padding: 1rem 2rem .5rem 2rem;
`;

const Card = styled("section")`
  background-color: lightgray;
  margin: 15px 15px 0 15px;
  padding-top: 10px;
  min-width: 85vw;

  @media (min-width: 768px) {
    min-width: 300px;
    max-width: 400px;
  } 
`;

const TravelInfo = styled("div")`
  display: flex;
  padding: 0 2rem 2rem;
  justify-content: space-between;
`;

const EmphasisText = styled("p")`
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
`


const Button = styled("button")`
  font-size: 32px;
  background-color: green;
  color: white;
  font-weight: bold;
  padding: 20px 15px;
  margin: 15px;
  margin-top: 30px;
  min-width: 85vw;

  @media (min-width: 768px) {
    min-width: 300px;
    max-width: 400px;
  }
`;


// DUMMY DATA
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

// TODO:
function Task({ porterId }) {
  const [type, updateType] = useState(null) // delivery or collection

  useEffect(() => {
    if (nextCheckin[0] === '4') {
      updateType('Collection')
    } else {
      updateType('Delivery')
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


  //   - Tasks: created_at, type, priority, deadline, startLocation, currentLocation, destination, pickedUpAt, deliveredAt, requester, porter, status (requested, allocated, pickedUp, delivered)
  //     - PUT completeTask
  //         - Parameters: location: int, porter: int
  // - Routes
  //     - GET porterRoute
  //         - [{location: text, time: int}, ]

  return (
    <>
      <Card>
        <TypeHeading>{type}</TypeHeading>
        <TravelInfo>
          <div>
            <p>{wardNames[previousCheckin]} to</p>
            <EmphasisText>{wardNames[nextCheckin[0]]}</EmphasisText>
          </div>
          <div>
            <p>By</p>
            <EmphasisText>{getDeadline()}</EmphasisText>
          </div>
        </TravelInfo>
      </Card>
      <Button type="button">Mark as Completed</Button>
    </>
  );
}

export default Task;
