import { Avatar } from "@mui/material";
import { getAuth } from "firebase/auth";
import React from "react";

const HeaderOptions = ({ title, Icon, avatar, onClick }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div
      className="flex flex-col items-center mr-5 text-gray-500 cursor-pointer hover:text-black"
      onClick={onClick}>
      <span>{Icon && <Icon className="icons" />}</span>
      <span>
        {avatar && (
          <Avatar src={avatar} className="icons">
            {user.email[0].toUpperCase()}
          </Avatar>
        )}
      </span>
      <h3 className="font-bold ">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
