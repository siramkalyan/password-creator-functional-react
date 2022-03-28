import React,{useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //const [auth1, setauth1] = useState("")
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        //setauth1(user.displayName);
        localStorage.setItem("user", user.email);
        localStorage.setItem("username", user.displayName);
       // alert(`Welcome ${user.displayName}`);
        window.location.reload();
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorMessage);
        // ...
      });
    }
  return (
    <button onClick={signIn}>signin</button>
  )
}

export default login