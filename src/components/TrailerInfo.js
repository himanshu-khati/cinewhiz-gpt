import React from "react";

const TrailerInfo = (props) => {
  const { title, overview } = props;

  return (
    <div className="trailer-info  ">
      <div className="w-full flex items-center justify-start my-24  px-9  ">
        <div className=" w-4/12 p-6 gap-3     bg-gradient-to-r from-black flex flex-col  ">
          <h1 className=" sm:text-4xl text-white sm:font-semibold font-semibold text-base">
            {title}
          </h1>
          <p className="text-white hidden sm:block sm:text-sm text-xs font-normal">
            {overview}
          </p>
          <div className="buttons flex flex-row gap-3  ">
            <button className=" px-7 py-2  bg-white bg-opacity-5  hover:bg-opacity-20 border text-white ">
              Play
            </button>
            <button className="px-7 py-2 flex gap-0.5 justify-center items-center bg-white bg-opacity-5 hover:bg-opacity-20 border text-white ">
              <span className=""> &#9432; </span>
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerInfo;
