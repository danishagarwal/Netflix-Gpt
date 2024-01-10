import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;
        console.log(user);
        //User is signed In
        dispatch(addUser({ email: email, displayName: displayName, uid: uid })); //Add everything in store
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black absolute z-30">
      <img
        className="w-72"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <div className="flex p-2">
          <img
            alt="usericon"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="w-14 h-14 mt-2"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
