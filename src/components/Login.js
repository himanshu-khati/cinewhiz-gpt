import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-2991-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcuCG2TC5AU-LAqZC4zS_hFUg-WJEmyUlKBthWsIsXf1fPiCDsn2N71ai3NOSjjXS2r5oK9n_-LLVAi2wMszFBHEhm74754.png?r=bb8",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          if (errorCode === "auth/email-already-in-use")
            setErrorMessage("Email already registered");
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          if (errorCode === "auth/invalid-login-credentials")
            setErrorMessage("Incorrect email or passsword");
        });
    }
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

              <form
                onSubmit={(e) => e.preventDefault()}
                action=""
                className=" w-full text-white"
              >
                {!isSignInForm && (
                  <input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    className="input-field"
                    required
                  />
                )}

                <input
                  ref={email}
                  type="text"
                  placeholder="Email"
                  className="input-field"
                />

                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="input-field"
                />
                {errorMessage && (
                  <p className="text-sm text-[#e87c03]  mb-2">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  className="red-button"
                  onClick={handleButtonClick}
                >
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
