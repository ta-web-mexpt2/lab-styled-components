import React from "react";
import styled from "styled-components";

const NotWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 35vw;
  background-color: purple;
`;

const Explore = () => {
  return (
    <NotWrapper>
      <h1> Notifications</h1>
    </NotWrapper>
  );
};

export default Explore;
