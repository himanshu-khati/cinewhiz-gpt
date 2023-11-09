import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
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
    <header>
      <div className="bg-black bg-opacity-40 ">
        <div className="container mx-auto  ">
          <div className="w-full px-2 sm:px-10 flex justify-between  items-center ">
            <div className="logo-area w-6/12">
              <div className="flex justify-start items-center ">
                <img src={NETFLIX_LOGO} alt="logo" className="logo " />
              </div>
            </div>

            {user && (
              <div className="user-area w-6/12">
                <div className=" flex justify-end items-center sm:gap-3 gap-1 ">
                  {showGptSearch && (
                    <div className="language-options">
                      <select
                        name=""
                        id=""
                        className="text-white bg-white bg-opacity-10 border hover:bg-white hover:bg-opacity-25"
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
                      className="text-white bg-white bg-opacity-10 border hover:bg-white hover:bg-opacity-25 p-2 rounded"
                      onClick={handleGptSearch}
                    >
                      {showGptSearch ? "Home" : "GPT Search"}
                    </button>
                  </div>
                  <div className="user-icon">
                    <img className="user-avatar" src={user?.photoURL} alt="" />
                  </div>
                  <div className="sign-out">
                    <p
                      className="text-white md:text-base md:font-semibold text-sm cursor-pointer "
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
      </div>
    </header>
  );
}

export default Header;
