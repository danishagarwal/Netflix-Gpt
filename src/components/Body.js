import React, { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  //Updating user in Store from one place, hence using onAuthStateChange
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;
        //User is signed In
        dispatch(addUser({ email: email, displayName: displayName, uid: uid })); //Add everything in store
        // navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/"); we cannot navigate from here since routing is there on the same page.
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
