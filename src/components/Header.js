import React from "react";
function Header() {
  return (
    <header className="bg-gradient-to-b from-black ">
      <div className="px-3 py-1 w-full mx-auto  ">
        <div className="width-full p-2">
          <div className="logo-area w-36   flex justify-center items-center">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
