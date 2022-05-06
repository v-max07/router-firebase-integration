import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';


const Login = () => {
    
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() =>{
                navigate(from, { replace: true });
            })
    }
    // {
    //     // Send them back to the page they tried to visit when they were
    //     // redirected to the login page. Use { replace: true } so we don't create
    //     // another entry in the history stack for the login page.  This means that
    //     // when they get to the protected page and click the back button, they
    //     // won't end up back on the login page, which is also really nice for the
    //     // user experience.
    //     navigate(from, { replace: true });
    // });
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In</button>
            <h3>please Sign in with!!</h3>
            <h4>User Name is : {user? user.displayName : "Vhooooot"} </h4>
        </div>
    );
};

export default Login;