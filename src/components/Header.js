import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <header className="bg-gradient-to-b from-black ">
      <div className="px-3 py-1 w-full mx-auto  ">
        <div className="width-full p-2 flex justify-between">
          <div className="logo-area w-36  flex justify-center items-center">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
              className="object-cover"
            />
          </div>
          {user && (
            <div className="user-area flex justify-center items-center gap-2">
              <div className="user-icon">
                <img src={user?.photoURL} alt="" />
              </div>
              <div className="sign-out">
                <p
                  className="text-white cursor-pointer "
                  onClick={handleSignOut}
                >
                  Sign Out
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
