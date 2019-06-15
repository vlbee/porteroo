import React from "react";
import styled from "styled-components";

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

const NextCollection = styled(UpcomingCollection)``;

const Title = styled("h2")`
  flex: 1;
  text-align: left;
  margin-left: 20px;
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

function BoxApp() {
  return (
    <Box>
      <CollectionPoint>
        <h1>Collection Point</h1>
        <h2> WARD G2 </h2>
      </CollectionPoint>
      <main>
        <div>
          <NextCollection>
            <Title>Next Collection</Title>
            <Time>14:00</Time>
            <Title>Delivery Window</Title>
            <Time>15:30-16:00</Time>
          </NextCollection>
          <UpcomingCollection>
            <Title>Upcoming Collection</Title>
            <Time>14:00</Time>
            <Title>Delivery Window</Title>
            <Time>15:30-16:00</Time>
          </UpcomingCollection>
        </div>
        <div>
          <UrgentReqest>Urgent Collection Request</UrgentReqest>
        </div>
      </main>
    </Box>
  );
}

export default BoxApp;
