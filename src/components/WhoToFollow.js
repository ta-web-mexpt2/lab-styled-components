import React from "react";
import styled from "styled-components";

const FollowWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 20vw;
  background-color: green;
`;

const WhoToFollow = () => {
  return (
    <FollowWrapper>
      <h1>Who to follow</h1>
    </FollowWrapper>
  );
};

export default WhoToFollow;
