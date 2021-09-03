import { createContext, useEffect, useState } from "react";
// import { Redirect, useHistory } from "react-router-dom";
import cookie from "js-cookie";

import { database, firebase } from "../lib/firebase";

const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  photo: user.photoURL,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const handleUser = async (currentUser) => {
    if (currentUser) {
      const formatedUser = await formatUser(currentUser);
      setUser(formatedUser);
      setSession(true);
      setChat(true);
      return formatedUser.email;
    }
    setUser(false);
    setSession(false);
    return false;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") {
      return;
    }

    const message = {
      content: newMessage,
      name: user.name,
      avatar: user.photo,
      id: user.uid,
    };

    await database.ref(`chat/${user.uid}/message`).push(message);
    setNewMessage("");
  };

  const setSession = (session) => {
    if (session) {
      cookie.set("Dz-auth", session, {
        expires: 1,
      });
    } else {
      cookie.remove("Dz-auth");
    }
  };

  const signinGoogle = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      handleUser(response.user);
    } catch {
      return;
    }
  };

  const signout = async () => {
    try {
      await firebase.auth().signOut();
      handleUser(false);
      setChat(false);
    } catch {
      return;
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    new firebase.database().ref("/chat").on("value", (snapshot) => {
      console.log("User data: ", snapshot.val());
    });
  });

  return (
    <AuthContext.Provider
      value={{
        signinGoogle,
        signout,
        setNewMessage,
        newMessage,
        handleSendMessage,
        chat,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
