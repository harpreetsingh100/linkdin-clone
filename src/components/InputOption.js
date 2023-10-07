import React from "react";

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="flex mt-3 items-center hover:bg-[whitesmoke] hover:text-black hover:cursor-pointer rounded-lg p-2">
      <Icon style={{ color: color }} />
      <h4 className="ml-2">{title}</h4>
    </div>
  );
};

export default InputOption;
