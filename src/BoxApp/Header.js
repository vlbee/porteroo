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
        <h2>Collection Point</h2>
        <h1> WARD {ward} </h1>
      </div>
    </Layout>
  );
};
