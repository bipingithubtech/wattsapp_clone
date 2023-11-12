import React from "react";
import "./css/Chat.css";
import { Avatar, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { AttachFile, MoveDown, SearchOffOutlined } from "@mui/icons-material";

const Chats = () => {
  const [name, setname] = useState("");
  useEffect(() => {
    setname(Math.floor(Math.random() * 5000));
  }, [""]);
  return (
    <div className="chats">
      <div className="header">
        <Avatar
          src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}`}
        />
        <div className="header_info">
          <h2>class</h2>
          <p>last seen</p>
        </div>
        <div className="head_right">
          <IconButton>
            <SearchOffOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoveDown />
          </IconButton>
        </div>
      </div>
      <div className="chat_body"></div>
    </div>
  );
};

export default Chats;
