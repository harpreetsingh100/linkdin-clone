import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import InputOption from "./InputOption";
import { getAuth } from "firebase/auth";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(photoUrl);
  return (
    <div className="bg-white p-4 mb-2 rounded-lg" ref={ref}>
      <div className="flex mb-2 ">
        <Avatar src={photoUrl}>{name && name[0]} </Avatar>
        <div className="ml-2">
          <h2 className="font-bold">{name}</h2>
          <p className="text-lg text-gray-500">{description}</p>
        </div>
      </div>

      <div className="overflow-[anywhere]">
        {/* overflow-wrap:anywhere */}
        <p>{message}</p>
      </div>

      <div className="flex ">
        <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
        <InputOption Icon={ModeCommentIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Repost" color="gray" />
        <InputOption Icon={SendIcon} title="Share" color="gray" />
      </div>
    </div>
  );
});

export default Post;
