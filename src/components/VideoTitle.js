import React from "react";

const VideoTitle = ({ title, overview }) => {
  //console.log(title, "-", overview);
  return (
    <div className="w-screen aspect-video pt-[18%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-200 text-black p-3 px-12 rounded-lg hover:bg-opacity-30">
          ▶️ Play
        </button>
        <button className="text-white ml-2 bg-gray-500 bg-opacity-90 text-lg text-black p-3 px-12 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
