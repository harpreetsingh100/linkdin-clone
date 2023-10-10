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
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userSlice";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const logoutOfApp = () => {
    dispatch(logOut());
    signOut(auth);
  };
  return (
    <div className="sticky top-0 z-50 flex items-center w-screen justify-evenly border-b-2 py-3 bg-white">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="logo" className="mr-2" />
        <div className="p-2 flex items-centers rounded-lg h-10 text-gray-500 bg-[#eef3f8]">
          <SearchIcon className="cursor-pointer" />
          <input
            type="text"
            className="border-none outline-none bg-[#eef3f8] px-2 "
          />
        </div>
      </div>
      <div className="flex">
        <HeaderOptions title="Home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOptions title="Messaging" Icon={ChatBubbleIcon} />
        <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
        <HeaderOptions avatar={User} title="Log Out" onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
