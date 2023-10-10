import React, { useState } from "react";
import LinkdinLogo from "../assets/Linkdin-logo.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const auth = getAuth();
  const dispatch = useDispatch();

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(
              logIn({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                displayName: userCredential.user.displayName,
                photoUrl: userCredential.userphotoURL,
              })
            );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          logIn({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
            photoUrl: userCredential.userphotoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="grid place-items-center mx-auto py-20">
      <img
        src={LinkdinLogo}
        alt="linkdin-logo"
        className="object-contain h-[70px] my-3"
      />
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Full name"
          className="w-80 h-12 text-lg px-2 mb-3 rounded-lg border-2 border-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic URL"
          className="w-80 h-12 text-lg px-2 mb-3 rounded-lg border-2 border-black"
          value={profilePic}
          onChange={(e) => {
            setProfilePic(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-80 h-12 text-lg px-2 mb-3 rounded-lg border-2 border-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-80 h-12 text-lg px-2 mb-3 rounded-lg border-2 border-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={login}
          className="w-80 h-12 text-lg text-white bg-[#0074b1] rounded-lg px-2 mb-3 border-2 border-black">
          Sign In
        </button>
      </form>
      <p>
        Not a member ?
        <span onClick={register} className="text-[#0177b7] cursor-pointer ml-2">
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
