import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

//Icons
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import MdHome from "react-ionicons/lib/MdHome";
import IosGridOutline from "react-ionicons/lib/IosGridOutline";
import MdNotificationsOutline from "react-ionicons/lib/MdNotificationsOutline";
import IosBookmarkOutline from "react-ionicons/lib/IosBookmarkOutline";
import IosListBoxOutline from "react-ionicons/lib/IosListBoxOutline";
import MdPerson from "react-ionicons/lib/MdPerson";
import IosMoreOutline from "react-ionicons/lib/IosMoreOutline";
import IosMailOutline from "react-ionicons/lib/IosMailOutline";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 30vw;
  height: 100vh;
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const NavtItem = styled.div`
  display:flex; 
  flex-direction: row; 
  justify-content: left; 
  align-items: center; 
  color: black;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  margin: 7 px;
  font-size: 1.3rem;
  margin-bottom: 25px;
  &:hover {
    color: #1da1f2;
    background-color: lightblue;
    border-radius: 50px;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <LogoTwitter color="#1da1f2" fontSize="35px" />
      </Link>
      <Nav>
        <NavtItem>
          <MdHome />
          <NavLink to="/">Home</NavLink>
        </NavtItem>
        <NavtItem>
          <IosGridOutline />
          <NavLink to="/explore">Explore</NavLink>
        </NavtItem>
        <NavtItem>
          <MdNotificationsOutline />
          <NavLink to="/notifications">Notifications</NavLink>
        </NavtItem>
        <NavtItem>
          <IosMailOutline />
          <NavLink to="/messages">Messages</NavLink>
        </NavtItem>
        <NavtItem>
          <IosBookmarkOutline />
          <NavLink to="/bookmarks">Bookmarks</NavLink>
        </NavtItem>
        <NavtItem>
          <IosListBoxOutline />
          <NavLink to="/lists">Lists</NavLink>
        </NavtItem>
        <NavtItem>
          <MdPerson />
          <NavLink to="/profile">Profile</NavLink>
        </NavtItem>
        <NavtItem>
          <IosMoreOutline />
          <NavLink to="/more">More</NavLink>
        </NavtItem>
        <NavtItem>
          <Button> Twittear</Button>
        </NavtItem>
      </Nav>
    </Wrapper>
  );
};

export default NavBar;
