import React from "react";
import styled from "styled-components";
import pogo from "../Logo.png";

const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 20px 10px 20px;

  & h1,
  h2 {
    margin: 0;
  }
`;

const TypeHeading = styled("header")`

  text-align: center;
  font-weight: 700;
  padding: 1rem 2rem .5rem 2rem;
`;


const Logo = styled("img")`
  margin-bottom: 20px;
  max-width: 300px;
  @media (max-width: 425px) {
    max-width: 75vw;
  }
`;

export const Header = ({ ward }) => {
  return (
    <Layout>
      <Logo src={pogo} alt="porteroo logo" />
      <div>
        <TypeHeading>Collection Point:</TypeHeading>
        <h1> WARD {ward} </h1>
      </div>
    </Layout>
  );
};
