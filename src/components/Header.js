import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { logo, user_icon } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //Updating user in Store from one place, hence using onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;
        // console.log(user);
        //User is signed In
        dispatch(addUser({ email: email, displayName: displayName, uid: uid })); //Add everything in store
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black absolute z-30">
      <div className="flex justify-center items-center">
        <img className="w-40 h-16" src={logo} alt="logo" />
        <nav className="text-sm text-white flex ">
          <ul className="p-2 ">Home</ul>
          <ul className="p-2 ">TV Shows</ul>
          <ul className="p-2 ">Movies</ul>
          <ul className="p-2 ">News & Popular</ul>
          <ul className="p-2 ">My List</ul>
        </nav>
      </div>
      {user && (
        <div className="flex p-2">
          <button
            onClick={handleSignOut}
            className="font-bold mt-8 pr-2 text-white"
          >
            SignOut
          </button>
          <img alt="usericon" src={user_icon} className="w-14 h-14" />
        </div>
      )}
    </div>
  );
};

export default Header;
