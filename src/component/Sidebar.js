import React from "react";
import "./css/Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="content">
      <div className="header">
        <IconButton>
          <AccountCircleIcon />
        </IconButton>

        <div className="heder_left">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="search">
        <div className="search_container">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="sidebar_chat">
        <SidebarChat aadNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
