import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

//Icons
// import IosSearchOutline from "react-ionicons/lib/IosSearchOutline";
// import IosSettingsOutline from "react-ionicons/lib/IosSettingsOutline";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  border: 0.5px solid lightgray;
`;

const SearchForm = styled.form`
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const SearchInput = styled.input`
  background-color: #e6e6e6;
  border-radius: 100px;
  border-style: none;
  font-size: 16px;
  padding: 5px 40px;
  width: 700px;
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchForm>
        <SearchInput type="text" placeholder="Buscar en Twitter" />
      </SearchForm>
    </Wrapper>
  );
};

export default SearchBar;
