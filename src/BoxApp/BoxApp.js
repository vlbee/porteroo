import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { useFetch } from "../useFetchHook";

const App = styled("div")`
  text-align: center;
`;

const Col = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Request = styled("button")`
  font-size: 32px;
  background-color: orange;
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

const RequestUrgent = styled(Request)`
  background-color: orangered;
  margin-top: 10px;
`;

const NextCollection = styled("section")`
  background-color: lightgray;
  margin: 15px 15px 0 15px;
  padding-top: 10px;
  min-width: 85vw;
  @media (min-width: 768px) {
    min-width: 300px;
    max-width: 400px;
  }
`;

const Title = styled.h2`
  font-size: 1em;
  color: ${props => (props.urgent ? "orangered" : null)};
`;
const Time = styled.h2`
  color: ${props => (props.urgent ? "orangered" : null)};
`;

const renderNext = ({ urgent, expectedTime, expectedDeliveryTime }) => (
  <NextCollection>
    <Title urgent={urgent}>
      {urgent ? "Next Collection (URGENT)" : "Next Collection"}
    </Title>
    <Time urgent={urgent}>{expectedTime}</Time>
    <Title>Delivery Window</Title>
    <Time>{expectedDeliveryTime}</Time>
  </NextCollection>
);

function BoxApp({ match }) {
  const { loading, data } = useFetch(
    `https://placeholder.com/locationPickUp/${match.params.ward}`
  );
  console.log(data);

  return (
    <App>
      <Header ward={match.params.ward} />
      {loading ? (
        <h2>Loading Porteroo data...</h2>
      ) : (
        <main>
          <Col>
            {data ? renderNext(data) : "No upcoming collections"}
            <Request>Request</Request>
            <RequestUrgent>Urgent Request</RequestUrgent>
          </Col>
        </main>
      )}
    </App>
  );
}

export default BoxApp;
