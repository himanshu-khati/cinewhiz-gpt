import React from "react";

const ShimmerMovieInfo = () => {
  return (
    <div className="backdrop-blur-md  bg-black/60   w-full relative top-10 px-0 pt-7 pb-10  md:px-8 md:pt-10 md:pb-14   ">
      <div className="w-full bg-black/50  flex flex-col animate-pulse  justify-between p-4 h-[550px] md:h-[450px]  "></div>
    </div>
  );
};

export default ShimmerMovieInfo;
