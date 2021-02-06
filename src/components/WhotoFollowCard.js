import React from "react";
import "./Components.css";
import ButtonComp from "./ButtonComp";

export default function WhotoFollowCard({ nickname, user_pic, user_id }) {
  return (
    <div id="Who-to-follow-div">
      <div>
        <img id="profile-pic" src={user_pic} alt="Profile Pic"></img>
      </div>
      <div id="content-text-div">
        <p id="p-bold">{nickname}</p>
        <p>{user_id}</p>
      </div>
      <div>
        <ButtonComp messagebtn="Seguir" size="small" />
      </div>
    </div>
  );
}
