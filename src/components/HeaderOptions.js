import { Avatar } from "@mui/material";
import React from "react";

const HeaderOptions = ({ title, Icon, avatar }) => {
  return (
    <div className="flex flex-col items-center mr-5 text-gray-500 cursor-pointer hover:text-black">
      <span>{Icon && <Icon className="icons" />}</span>
      <span>{avatar && <Avatar src={avatar} className="icons" />}</span>
      <h3 className="font-bold ">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
