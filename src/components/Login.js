import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";

const Login = () => {
  /* When someone clicks on button "New to Netflix" to change text */
  const [toggle, setToggle] = useState(true);
  const toggleSignUp = () => {
    setToggle(!toggle);
  };

  /* Error Message when form data is incorrect */
  const [errorMessage, setErrorMessage] = useState(null);

  /* When we click on button -> Validate form */
  const email = useRef(null); //to pass data to the function
  const password = useRef(null);
  const handleSubmitBtn = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(password.current.value);
    console.log(message);
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
          toggle ? "h-2/4" : "h-2/2"
        }`}
      >
        <h1 className="font-bold text-3xl py-4">
          {/* If toggle is true then signIn else SignUp */}
          {toggle ? "Sign In" : "Sign Up"}
        </h1>

        {!toggle && (
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
          {toggle ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignUp} className="cursor-pointer py-4 text-sm">
          {toggle
            ? "New to Netflix? SignUp Now"
            : "Already Registered? Login Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
