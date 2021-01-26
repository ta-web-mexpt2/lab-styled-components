import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 35vw;
  background-color: red;
`;

const Messages = () => {
  return (
    <Wrapper>
      <h1> Bookmarks</h1>
    </Wrapper>
  );
};

export default Messages;
