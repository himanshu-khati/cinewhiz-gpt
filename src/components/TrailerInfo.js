import React from "react";

const TrailerInfo = (props) => {
  const { title, overview } = props;

  return (
    <div className="trailer-info sm:absolute sm:top-0  z-20 hidden    ">
      <div className="container mx-auto">
        <div className="sm:w-full w-80 mx-auto flex  xl:px-20 lg:py-40 lg:px-14 md:py-36 md:px-9 sm:py-28 sm:px-5 items-center sm:justify-start justify-center   ">
          <div className=" xl:w-4/12 xl:p-6 lg:p-6  md:w-6/12 md:p-4 lg:gap-3 md:gap-2 sm:w-6/12 w-full sm:p-2 sm:gap-1 gap-2   sm:bg-gradient-to-r from-black flex flex-col  ">
            <h1 className=" lg:text-4xl text-gray-200  md:text-2xl  sm:text-lg sm:font-semibold font-bold text-base sm:text-left sm:block hidden text-center">
              {title}
            </h1>
            <p className="text-gray-300 xl:text-base lg:text-sm md:text-sm sm:text-xs sm:block hidden text-xs ">
              {overview}
            </p>
            <div className="buttons flex  sm:gap-2 lg:mt-4 sm:mt-2  sm:justify-normal justify-center items-center w-full  mb-1  gap-2 ">
              <button className=" bg-white bg-opacity-100 hover:bg-opacity-90  text-gray-950 lg:py-1 lg:px-8  md:py-1 md:px-4 md:text-base md:font-medium  sm:py-1 sm:px-3 sm:text-sm sm:w-auto w-6/12 text-sm px-5 py-1 rounded  ">
                Play
              </button>
              <button className=" bg-white bg-opacity-5 hover:bg-opacity-20 border text-gray-300 lg:py-1 lg:px-8  md:py-1 md:px-4 md:text-base sm:py-1 sm:px-3 sm:text-sm text-sm px-2 py-1 rounded sm:w-auto w-full">
                <span className=""> &#9432; </span>
                More info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerInfo;
