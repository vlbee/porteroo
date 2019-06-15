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

const NextCollection = styled(UpcomingCollection)`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  background-color: lightgray;
  padding: 10px;
`;

function App() {
  return (
    <Box>
      <CollectionPoint>
        <h1>Collection Point</h1>
        <h2> WARD G2 </h2>
      </CollectionPoint>
      <main>
        <div>
          <NextCollection>
            <h1>Next Collection</h1>
            <h2>14:00</h2>
            <h1>Delivery Window</h1>
            <h2>15:30-16:00</h2>
          </NextCollection>
          <UpcomingCollection>
            <h1>Upcoming Collection</h1>
            <h2>14:00</h2>
            <h1>Delivery Window</h1>
            <h2>15:30-16:00</h2>
          </UpcomingCollection>
        </div>
        <div>
          <button>Urgent Collection Request</button>
        </div>
      </main>
    </Box>
  );
}

export default App;
