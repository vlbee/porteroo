import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo.png";

const Box = styled("div")`
  text-align: center;
`;

const CollectionPoint = styled("header")`
  padding: 10px;
`;

const UpcomingCollection = styled("section")`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  background-color: lightgray;
  padding: 10px;
`;

const NextCollection = styled(UpcomingCollection)`
  vertical-align: middle;
`;

const Title = styled("h2")`
  flex: 1;
  text-align: left;
  margin-left: 20px;
  padding: 1em 0;
  width: 100%;
  font-size: 1em;
`;

const Time = styled("h2")`
  margin-right: 20px;
`;

const UrgentReqest = styled("button")`
  font-size: 32px;
  background-color: lightcoral;
  color: white;
  padding: 30px;
  margin-top: 30px;
`;

function BoxApp({ match }) {
  const state = {
    next: "17:00",
    nextDelivery: "17:00",
    upcoming: "17:00",
    upcomingDelivery: "17:00"
  };
  const [pickUps, updatePickUps] = useState(state); // delivery or ion

  return (
    <NextCollection>
      <CollectionPoint>
        <img src={Logo} alt="porteroo logo" width={300} />
        <h1>Collection Point</h1>
        <h2> WARD {match.params.ward} </h2>
      </CollectionPoint>
      <main>
        <div>
          <NextCollection>
            <Title>Next Collection</Title>
            <Time>{pickUps.next}</Time>
            <Title>Delivery Window</Title>
            <Time>{pickUps.nextDelivery}</Time>
          </NextCollection>
          <UpcomingCollection>
            <Title>Upcoming Collection</Title>
            <Time>{pickUps.upcoming}</Time>
            <Title>Delivery Window</Title>
            <Time>{pickUps.upcomingDelivery}</Time>
          </UpcomingCollection>
        </div>
        <div>
          <UrgentReqest>Urgent Collection Request</UrgentReqest>
        </div>
      </main>
    </NextCollection>
  );
}

export default BoxApp;
