import React from "react";

const VideoTitle = ({ title, overview }) => {
  //console.log(title, "-", overview);
  return (
    <div className="pt-52 px-16">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-200 text-lg text-black p-3 px-12 rounded-lg">
          ▶️ Play
        </button>
        <button className="ml-2 bg-gray-200 text-lg text-black p-3 px-12 rounded-lg">
          ❓More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
