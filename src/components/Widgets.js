import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="flex p-1 cursor-pointer hover:bg-[whitesmoke]">
        <div className="ml-3 text-[#0177b7]">
          <FiberManualRecordIcon className="blue-dot" />
        </div>
        <div className="flex-[1]">
          <h4 className="text-base">{heading}</h4>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="flex-[0.2] bg-white sticky top-[70px] flex-col rounded-lg border-2 h-[fit-content] pb-3">
      <div className="flex items-center justify-between p-3">
        <h2 className="font-lg font-semibold ">Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React Js is here to stay", "Top News - 9047 readers")}
      {newsArticle("React Js is here to stay", "Top News - 9047 readers")}
      {newsArticle("Tesla hits the new highs", "Top News - 3057 readers")}
      {newsArticle("Tesla hits the new highs", "Top News - 3057 readers")}
    </div>
  );
};

export default Widgets;
