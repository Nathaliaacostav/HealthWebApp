import {auth} from "../firebase/firebaseConfig"
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("useIsLoginScreen debe ser utilizado dentro de un LoginScreenProvider")
  }
  return context;
};

export function AuthProvider ({ children }){
  const register = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)
  console.log(response);
};
const login = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
  console.log(response)
}
const loginWithGoogle = async () => {
  const responseGoogle = await new GoogleAuthProvider()
  return signInWithPopup(auth, responseGoogle)
};
const logout = async () => {
  const response = await signOut(auth)
  console.log(response)
}
  return (
    <authContext.Provider
     value={{
      register,
      login,
      loginWithGoogle
      }}
      >
      {children}
      </authContext.Provider>
  );
}

export { LoginScreenProvider, useIsLoginScreen };

LoginScreenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
