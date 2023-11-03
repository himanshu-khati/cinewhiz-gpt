import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div className="login-background h-full min-h-screen ">
        <Header />
        <section className="login-sign-up flex justify-center items-center ">
          <div className="container my-2 h-auto mx-auto ">
            <div className=" w-11/12 md:w-5/12  flex flex-col p-16 bg-[rgba(0,0,0,.75)] my-5 mx-auto  ">
              <h1 className="text-3xl text-white  font-medium mb-7">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>

              <form action="" className=" w-full text-white">
                {!isSignInForm && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input-field"
                  />
                )}
                <input
                  type="text"
                  placeholder="Email"
                  className="input-field"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                />
                <button type="submit" className="red-button">
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
              </form>
              <p
                className="text-white my-3 cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to Netflix? Sign up now"
                  : "Already registered? Sign In now"}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
