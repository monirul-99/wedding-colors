import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const ServiceContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleGoogleProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // const handleFacebookProvider = (provider) => {
  //   return signInWithPopup(auth, provider);
  // };

  const handleGithubProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const registerWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
    handleGoogleProvider,
    registerWithEmailPassword,
    handleUpdateProfile,
    handleGithubProvider,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ServiceContext;
