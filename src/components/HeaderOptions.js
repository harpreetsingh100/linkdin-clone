import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const HeaderOptions = ({ title, Icon, avatar, onClick }) => {
  const user = useSelector((store) => store.user.user);

  return (
    <div
      className="flex flex-col items-center mr-5 text-gray-500 cursor-pointer hover:text-black"
      onClick={onClick}>
      <span>{Icon && <Icon className="icons" />}</span>
      <span>
        {avatar && (
          <Avatar src={avatar} className="icons">
            {/* {user && user.email[0]} */}
          </Avatar>
        )}
      </span>
      <h3 className="font-bold ">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
