import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center w-screen justify-evenly border-b-2 py-3">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="logo" className="mr-2" />
        <div className="p-2 flex items-centers rounded-lg h-10 text-gray-500 bg-[#eef3f8]">
          <SearchIcon className="cursor-pointer" />
          <input
            type="text"
            className="border-none outline-none bg-[#eef3f8]"
          />
        </div>
      </div>
      <div className="flex">
        <HeaderOptions title="Home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOptions title="Messaging" Icon={ChatBubbleIcon} />
        <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
        <HeaderOptions avatar={User} title="Harpreet" />
      </div>
    </div>
  );
};

export default Header;
