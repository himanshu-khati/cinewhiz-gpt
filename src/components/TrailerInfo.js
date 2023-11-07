import React from "react";

const TrailerInfo = (props) => {
  const { title, overview } = props;

  return (
    <div className="trailer-info ">
      <div className="w-full  px-3 py-10 border sm:py-36 sm:px-10 border-red-600">
        <div className=" w-6/12 py-3 px-2 gap-1 sm:w-5/12 border sm:p-6 bg-gradient-to-r from-black flex flex-col sm:gap-4 ">
          <h1 className=" sm:text-4xl text-white sm:font-semibold font-semibold text-base">
            {title}
          </h1>
          <p className="text-white hidden sm:block sm:text-sm text-xs font-normal">
            {overview}
          </p>
          <div className="buttons flex flex-row gap-3  ">
            <button className="red-button bg-white font-light text-sm sm:font-semibold sm:text-lg   ">
              Play
            </button>
            <button className="red-button bg-[rgba(109, 109, 110, 0.4)] flex items-center justify-center gap-1 text-white sm:font-semibold font-light text-sm sm:text-lg sm:p-1 border hover:bg-[rgba(109, 109, 110, 0.4)] ">
              <span className="font-normal text-sm sm:text-3xl"> &#9432; </span>{" "}
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerInfo;
