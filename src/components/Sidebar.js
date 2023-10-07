import { Avatar } from "@mui/material";
import React from "react";
import User from "../assets/user.png";
import Background from "../assets/background.jpg";

const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className="flex hover:bg-[whitesmoke] hover:cursor-pointer hover:rounded-lg hover:text-black p-1 ">
        <span className="font-light text-gray-500 text-sm cursor-pointer hover:text-black hover:font-normal">
          #
        </span>
        <p className="font-light text-gray-500 text-sm cursor-pointer ml-1 hover:text-black hover:font-normal">
          {topic}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="sticky top-[80px] flex-[0.2] rounded-xl text-center h-[fit-content] border-2  pb-3  bg-white mb-2">
        <div className="mb-2">
          <img
            src={Background}
            alt="sidebar-logo"
            className=" mb-[-20px] w-full h-20 object-cover rounded-t-xl"
          />
          <div className="text-center inline-block">
            <Avatar className="sidebar-icon mb-3" src={User} />
          </div>
          <h2 className="px-3 font-bold">Harpreet Singh</h2>
          <h4 className="px-3 text-sm">harpreetsingh@gmail.com</h4>
        </div>
        <hr />

        <div className="mt-3 flex justify-between px-3">
          <p className="text-sm">Who viewd you</p>
          <p className="font-bold text-sm">2,568</p>
        </div>
        <div className="mt-3 flex justify-between px-3">
          <p className="text-sm">Views on post</p>
          <p className="font-bold text-sm">2,225</p>
        </div>
      </div>
      <div className="mt-1 p-3 border-2 bg-white rounded-xl  ">
        <p className="mb-1">Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
