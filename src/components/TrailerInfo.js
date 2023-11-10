import React from "react";

const TrailerInfo = (props) => {
  const { title, overview } = props;

  return (
    <div className="trailer-info absolute top-0 left-0 z-20 border-4 border-red-500">
      <div className="container m-auto sm:py-40 border-2 border-green-900">
        <div className="w-full flex items-center justify-start">
          <div className=" w-4/12 p-6 gap-3     bg-gradient-to-r from-black flex flex-col  ">
            <h1 className=" sm:text-4xl text-white sm:font-semibold font-semibold text-base">
              {title}
            </h1>
            <p className="text-white hidden sm:block sm:text-sm text-xs font-normal">
              {overview}
            </p>
            <div className="buttons flex mt-5 md:mt-4 sm:mt-4 xs:justify-center  ">
              <button className=" bg-white bg-opacity-5 hover:bg-opacity-20 border text-white text-lg px-10 py-2 md:py-1 md:text-base md:px-8 sm:py-1 sm:text-base xs:text-xs xs:px-6 sm:px-8 rounded  ">
                Play
              </button>
              <button className="mx-2 px-10 py-2 md:py-1 md:text-base md:px-8 sm:py-1 sm:text-base xs:text-xs xs:px-6 sm:px-8 text-sm  rounded bg-white bg-opacity-5 hover:bg-opacity-20 border text-white ">
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
