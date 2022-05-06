import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Home Page</h2>
            <h4>User Name: {user?.displayName} </h4>
            {/* <img src={user?.photoURL} alt="" /> */}
        </div>
    );
};

export default Home;