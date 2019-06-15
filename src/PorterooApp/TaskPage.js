import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TypeHeading = styled("header")`
  text-decoration: underline;
  font-weight: 700;
  padding-bottom: .2rem;
`;

const Card = styled("div")`
  padding: 2rem;
  background-color: lightgray;
`;

const TravelInfo = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const EmphasisText = styled("p")`
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
`

const Button = styled("button")`
  background-color: lightgreen;
  padding: .8rem 1rem;
  margin-top: 30px;
  border: 2px solid green;
  font-weight: 700;
  color: green;
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
function TaskPage() {
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

  return (
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
      <Button type="button"><Link to="/porteroo/updateprogress">Mark as Completed</Link></Button>
    </Card>
  );
}

export default TaskPage;
