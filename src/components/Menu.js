import React from "react";
import styled from "styled-components";
import Button from "./Button";
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
  justify-content: flex-start;
  align-items: center;
  width: 20vw;
  height: 100vh;
  padding: 10px;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const ListItem = styled.li`
  color: black;
  list-style: none;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  font-size: 1.3rem;
  margin-bottom: 25px;
  &:hover {
    color: #1da1f2;
    background-color: lightblue;
  }
`;

// const Icon = ({IconName}) => {
//     return(
//         IconName === "Home" ? <MdHome/>
//         : IconName === "Explore" ? <IosGridOutline/>
//         : IconName === "Notifications" ? <MdNotificationsOutline/>
//         : IconName === "Bookmark" ? <IosBookmarkOutline/>
//         : IconName === "List" ? <IosListBoxOutline/>
//         : IconName === "Avatar" ? <MdPerson/>
//         : IconName === "More" ? <IosMoreOutline/>
//         : IconName === "Mail" ? <IosMailOutline/>
//     )
// };

const Link = ({ icon, name, children }) => {
  return (
    <ListItem>
      {children}
      {icon}
      <a href="#">{name}</a>
    </ListItem>
  );
};

const Menu = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <LogoTwitter color="#1da1f2" fontSize="35px" />
      <ListContainer>
        <Link /*icon="Home"*/ name="Inicio" />
        <Link name="Explore" />
        <Link name="Notification" />
        <Link name="Mail" />
        <Link name="Bookmark" />
        <Link name="List" />
        <Link name="Avatar" />
        <Link name="More" />
      </ListContainer>
      <Button> Twittear</Button>
    </Wrapper>
  );
};

export default Menu;
