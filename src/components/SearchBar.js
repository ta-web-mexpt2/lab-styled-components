import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Icons
import IosSearchOutline from "react-ionicons/lib/IosSearchOutline";
import IosSettingsOutline from "react-ionicons/lib/IosSettingsOutline";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100vw;
  height: 150px;
  padding: 20px;
  border: 0.5px solid lightgray;
`;

const SearchForm = styled.form`
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  position: relative;

  .searchIcon {
    position: absolute;
    top: 5%;
    left: 10px;
    transform: translate/margin(-50%);
    z-index: 9;
  }
`;

const SearchInput = styled.input`
  background-color: #e6e6e6;
  border-radius: 100px;
  border-style: none;
  font-size: 16px;
  padding: 5px 40px;
  width: 100%;
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchForm>
        <IosSearchOutline className="searchIcon" fontSize="24px" />
        <SearchInput type="text" placeholder="Search Twitter" />
        <IosSettingsOutline fontSize="24px" />
      </SearchForm>
    </Wrapper>
  );
};

export default SearchBar;
