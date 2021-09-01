import { createContext, useState } from "react";
import { Redirect } from "react-router-dom";

import firebase from "../lib/firebase";

const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  photoUrl: user.photoURL,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  if (user) {
  }

  console.log(user);

  const handleUser = async (currentUser) => {
    if (currentUser) {
      const formatedUser = await formatUser(currentUser);
      setUser(formatedUser);
      return formatedUser.email;
    }
    setUser(false);
    return false;
  };

  const signinGoogle = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      handleUser(response.user);
    } catch {
      return;
    } finally {
      <Redirect to="/chat" />;

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
