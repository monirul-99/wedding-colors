import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const ServiceContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [review, setReview] = useState([]);
  console.log(review);
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const handleGoogleProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const signInBtn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const handleGithubProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const registerWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user?.displayName);
    });
    return () => unSubscribe();
  }, [user]);
  const authInfo = {
    user,
    handleGoogleProvider,
    registerWithEmailPassword,
    handleUpdateProfile,
    handleGithubProvider,
    logOut,
    signInBtn,
    review,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ServiceContext;
