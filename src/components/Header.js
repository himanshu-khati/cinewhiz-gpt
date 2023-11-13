import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLangugage } from "../utils/configSlice";

function Header() {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (event) => {
    dispatch(changeLangugage(event.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <header className="absolute  z-50 px-2 sm:px-4 sm:py-2 py-3  backdrop-blur-md bg-black/60  w-full top-0 ">
      <div className="container mx-auto ">
        <div className="w-full flex justify-between  items-center ">
          <div className="logo-area sm:w-6/12 w-3/12">
            <div className="flex justify-start items-center ">
              <p className="text-cinewhiz tracking-widest  sm:font-bold sm:text-3xl font-semibold text-xl">
                CINEWHIZ
              </p>
            </div>
          </div>

          {user && (
            <div className="user-area sm:w-6/12 9/12">
              <div className=" flex justify-end items-center sm:gap-3 gap-2 ">
                {showGptSearch && (
                  <div className="language-options">
                    <select
                      name=""
                      id=""
                      className="text-gray-300 bg-black cursor-pointer  bg-opacity-5  text-sm sm:text-base"
                      onChange={handleLanguageChange}
                    >
                      {SUPPORTED_LANGUAGES.map((language) => (
                        <option
                          key={language.identifier}
                          value={language.identifier}
                          className="text-black"
                        >
                          {language.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="gpt-search">
                  <button
                    className="text-gray-300 bg-white bg-opacity-10 border hover:bg-white hover:bg-opacity-25 sm:p-2 py-0.5 px-1 rounded"
                    onClick={handleGptSearch}
                  >
                    {showGptSearch ? "Home" : "GPT Search"}
                  </button>
                </div>
                <div className="user-icon">
                  <img
                    className="user-avatar sm:w-auto sm:h-auto w-4 h-4 "
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <div className="sign-out">
                  <p
                    className="text-white sm:text-base sm:font-semibold text-sm cursor-pointer "
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
