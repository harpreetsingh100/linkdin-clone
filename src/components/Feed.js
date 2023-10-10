import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InputOption from "./InputOption";
import PanoramaIcon from "@mui/icons-material/Panorama";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import Post from "./Post";
import { db } from "../firebase/firebase";
import {
  collection,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
  addDoc,
} from "firebase/firestore";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();
    const newPost = await addDoc(collection(db, "posts"), {
      name: "Harpreet",
      message: input,
      timestamp: serverTimestamp(),
    });
    setPosts((prev) => {
      return [...prev, newPost];
    });
  };

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let postsArr = [];
      querySnapshot.forEach((doc) => {
        postsArr.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsArr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex-[0.7] mx-2 border-2 rounded-xl w-full mt-2">
      <div className="bg-white p-3 pb-6 mb-1 w-full rounded-lg">
        <div className="flex rounded-xl p-3 border-2 w-full text-gray-500">
          <EditIcon />
          <form className="flex w-full" onSubmit={sendPost}>
            <input
              type="text"
              className="mx-3 w-[200px] flex-1 outline-none rouned-lg px-1"
              placeholder="Create Post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/* <button type="submit" onClick={sendPost} className="hidden">
              Send
            </button> */}
          </form>
        </div>
        <div className="flex justify-evenly">
          <InputOption title="Media" Icon={PanoramaIcon} color="#70BFF9" />
          <InputOption title="Event" Icon={CalendarMonthIcon} color="#E7A33E" />
          <InputOption title="Write Article" Icon={FeedIcon} color="#7FC15E" />
        </div>
      </div>

      {/* posts */}
      <div>
        {posts &&
          posts.map((post) => {
            return <Post {...post} key={post.id} />;
          })}
      </div>
    </div>
  );
};

export default Feed;
