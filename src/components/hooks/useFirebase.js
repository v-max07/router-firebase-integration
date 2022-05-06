import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.init';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
            
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                setUser(user);
                console.log(user);

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

                console.error(errorMessage);
            });

    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful.");
            setUser({});
        }).catch((error) => {
            // An error happened.
        });  
    };
    
    return {
        user,
        signInGoogle,
        handleSignOut
    };
}

export default useFirebase;