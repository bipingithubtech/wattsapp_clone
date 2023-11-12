import React, { useEffect, useState } from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";

const SidebarChat = ({ aadNewChat }) => {
  const [name, setname] = useState("");
  useEffect(() => {
    setname(Math.floor(Math.random() * 5000));
  }, [""]);
  const creteChatt = () => {
    const roomname = prompt("enter the name");
  };

  return !aadNewChat ? (
    <div className="sidebar_chat">
      <Avatar src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}`} />
      <div className="sidebarchat_info">
        <h2>Room name</h2>
        <p>last messagae..</p>
      </div>
    </div>
  ) : (
    <div className="new chat " onClick={creteChatt}>
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
