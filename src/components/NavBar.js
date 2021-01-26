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
  width: 20vw;
  height: 100vh;
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavtItem = styled.div`
  display: flex;
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

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #180000;
  padding: 0px 20px;
  &:hover {
    color: #1da1f2;
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
          <MdHome fontSize="35px" />
          <MenuLink to="/">Home</MenuLink>
        </NavtItem>
        <NavtItem>
          <IosGridOutline fontSize="35px" />
          <MenuLink to="/explore">Explore</MenuLink>
        </NavtItem>
        <NavtItem>
          <MdNotificationsOutline ontSize="35px" />
          <MenuLink to="/notifications">Notifications</MenuLink>
        </NavtItem>
        <NavtItem>
          <IosMailOutline fontSize="35px" />
          <MenuLink to="/messages">Messages</MenuLink>
        </NavtItem>
        <NavtItem>
          <IosBookmarkOutline fontSize="35px" />
          <MenuLink to="/bookmarks">Bookmarks</MenuLink>
        </NavtItem>
        <NavtItem>
          <IosListBoxOutline fontSize="35px" />
          <MenuLink to="/lists">Lists</MenuLink>
        </NavtItem>
        <NavtItem>
          <MdPerson fontSize="35px" />
          <MenuLink to="/profile">Profile</MenuLink>
        </NavtItem>
        <NavtItem>
          <IosMoreOutline fontSize="35px" />
          <MenuLink to="/more">More</MenuLink>
        </NavtItem>
      </Nav>
      <Button> Twittear</Button>
    </Wrapper>
  );
};

export default NavBar;
