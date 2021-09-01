import { createContext, useState } from "react";

import firebase from "../lib/firebase";

const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(user)

  const signinGoogle = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        setUser(response)
    } catch {
      return;  
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signinGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
