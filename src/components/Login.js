import Header from "./Header";
import Footer from "./Footer";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
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
            photoURL: USER_AVATAR,
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
    <section className="login-page ">
      <div className="container mx-auto login-background bg-cover">
        <div className="backdrop-blur-sm sm:py-28  py-40  bg-white/10 relative">
          <Header />
          <div className="login-sign-up w-full flex  justify-center items-center ">
            <div className=" sm:w-6/12 w-11/12 flex flex-col p-7 sm:p-12 bg-[rgba(0,0,0,0.85)] ">
              <h1 className="text-3xl text-cinewhiz   font-medium mb-7">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>

              <form
                onSubmit={(e) => e.preventDefault()}
                action=""
                className=" text-gray-200"
              >
                {!isSignInForm && (
                  <input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    className="input-field mb-4 rounded "
                    required
                  />
                )}

                <input
                  ref={email}
                  type="text"
                  placeholder="Email"
                  className="input-field mb-4 rounded "
                />

                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="input-field mb-4 rounded "
                />
                {errorMessage && (
                  <p className="text-sm text-[#e87c03]  mb-2">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  className="rounded p-4 w-full font-medium bg-cinewhiz hover:bg-cinewhiz/80 text-white"
                  onClick={handleButtonClick}
                >
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
              </form>
              <p
                className="text-gray-200 my-3 cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to CineWhiz? Sign up now"
                  : "Already registered? Sign In now"}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
