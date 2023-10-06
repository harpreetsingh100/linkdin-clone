import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const Feed = () => {
  return (
    <div className="flex-[0.6] m-2 border-2 rounded-xl">
      <div>
        <div className="flex justify-evenly bg-white p-3 pb-6 mb-6">
          <EditIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
