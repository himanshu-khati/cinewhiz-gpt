import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" login-background">
      <div className="flex items-center h-screen justify-center  bg-black/70 backdrop-blur-lg">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <p className="text-2xl font-semibold mt-4 text-cinewhiz">
            Page Not Found
          </p>
          <p className="text-gray-200 mt-2">
            Sorry, the page you are looking for might be in another castle.
          </p>
          <button
            className="mt-6 px-4 py-2 text-white bg-cinewhiz rounded-md hover:bg-green-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={() => navigate("/")}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
