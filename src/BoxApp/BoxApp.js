import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { useFetchGet } from "../fetch-util";
import { RequestButtons } from "./Requests";

const App = styled("div")`
  text-align: center;
`;

const Col = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const renderNext = ({ isUrgent, pickUp, delivery }) => (
  <NextCollection>
    <Title urgent={isUrgent}>
      {isUrgent ? "Next Collection (URGENT)" : "Next Collection"}
    </Title>
    <Time urgent={isUrgent}>{delivery}</Time>
    <Title>Delivery Window</Title>
    <Time>{pickUp}</Time>
  </NextCollection>
);

function BoxApp({ match }) {
  const collectionState = {
    loading: true,
    pickUp: null,
    delivery: null,
    urgent: false
  };
  const [collection, updateCollection] = useState(collectionState);

  const { loading, data } = useFetchGet(
    `https://placeholder.com/locationPickUp/${match.params.ward}`
  );
  useEffect(() => {
    !!data &&
      updateCollection({
        pickUp: data.expectedTime,
        delivery: data.expectedTime,
        isUrgent: data.urgent
      });
  }, [data, loading]);

  // Enables/Disables the requesting buttons depending if a request or urgent request has already been made
  const requestState = {
    req: true,
    urgentReq: true
  };
  const [requestActions, updateRequestActions] = useState(requestState);

  useEffect(() => {
    if (collection) {
      collection.isUrgent
        ? updateRequestActions({
            req: false,
            urgentReq: false
          })
        : updateRequestActions({
            req: false,
            urgentReq: true
          });
    } else {
      updateRequestActions(requestState);
    }
  }, [collection, requestState]);

  return (
    <App>
      <Header ward={match.params.ward} />
      {loading ? (
        <h2>Loading Porteroo data...</h2>
      ) : (
        <main>
          <Col>
            {!!collection.pickUp
              ? renderNext(collection)
              : "No upcoming collections"}
            <RequestButtons
              ward={match.params.ward}
              enableReq={requestActions.req}
              enableUrg={requestActions.urgentReq}
            />
          </Col>
        </main>
      )}
    </App>
  );
}

export default BoxApp;
