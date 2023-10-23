import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  /* When someone clicks on button "New to Netflix" to change text */
  const [isSignIn, setisSignIn] = useState(true);
  const toggleSignUp = () => {
    setisSignIn(!isSignIn);
  };

  /* Error Message when form data is incorrect */
  const [errorMessage, setErrorMessage] = useState(null);

  /* When we click on button -> Validate form */
  const email = useRef(null); //to pass data to the function
  const password = useRef(null);
  const handleSubmitBtn = () => {
    //Check if this is valid
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return null;

    /* SignUp Logic */
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
          // ..
        });
    } else {
      /* SignIn Logic*/

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signed in" + user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "bleh hahah " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`text-white w-3/12 bg-opacity-70 bg-black p-12 absolute my-32 mx-auto right-0 left-0 ${
          isSignIn ? "h-2/4" : "h-2/2"
        }`}
      >
        <h1 className="font-bold text-3xl py-4">
          {/* If isSignIn is true then signIn else SignUp */}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="text-sm w-full p-4 rounded-lg my-2 bg-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="text-sm w-full p-4 rounded-lg my-2 bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-sm rounded-lg w-full my-2 p-4 bg-gray-500"
        />

        <p className="text-sm font-bold text-red-700">{errorMessage} </p>
        <button
          onClick={handleSubmitBtn}
          className="rounded-md text-base p-4 my-8 bg-red-700 w-full "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignUp} className="cursor-pointer py-4 text-sm">
          {isSignIn
            ? "New to Netflix? SignUp Now"
            : "Already Registered? Login Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
