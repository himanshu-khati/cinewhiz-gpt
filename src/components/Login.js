import Header from "./Header";
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
                  className="red-button bg-[#e50914]"
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
