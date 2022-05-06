import React from 'react';
import useFirebase from '../hooks/useFirebase';


const Login = () => {
    const {signInGoogle} = useFirebase();
    return (
        <div>
            <button onClick={signInGoogle}>Google</button>
            <h3>please Sign in with!!</h3>
        </div>
    );
};

export default Login;