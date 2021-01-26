import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Wrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: top;
  max-width: 100%;
  font-family: Helvetica, Arial, sans-serif;
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <NavBar />
        {children}
      </Wrapper>
    </>
  );
};

export default PageLayout;
