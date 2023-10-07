import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InputOption from "./InputOption";
import PanoramaIcon from "@mui/icons-material/Panorama";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="flex-[0.6] mx-2 border-2 rounded-xl w-full mt-2">
      <div className="bg-white p-3 pb-6 mb-1 w-full rounded-lg">
        <div className="flex rounded-xl p-3 border-2 w-full text-gray-500">
          <EditIcon />
          <form className="flex w-full ">
            <input
              type="text"
              className="mx-3 w-[200px] flex-1 outline-none rouned-lg px-1"
              placeholder="Create Post"
            />
            <button type="submit" className="hidden">
              Send
            </button>
          </form>
        </div>
        <div className="flex justify-evenly">
          <InputOption title="Media" Icon={PanoramaIcon} color="#70BFF9" />
          <InputOption title="Event" Icon={CalendarMonthIcon} color="#E7A33E" />
          <InputOption title="Write Article" Icon={FeedIcon} color="#7FC15E" />
        </div>
      </div>

      {/* posts */}
      {posts.map((post) => (
        <Post />
      ))}
      {/* <Post
        name="happy"
        description="test"
        message="ds;fjlafs asf lfshlkhsdkajfljhlsjf adkjksdahjsdhajhdsjfhjsdhfsdhfsdhdshjdshkjdshlksdha sdldldshaladhsldhsalahsdhsadlhsdlhdslsdlslh"
      /> */}
    </div>
  );
};

export default Feed;
