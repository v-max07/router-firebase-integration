import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import "./Header.css";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/reviews">Reviews</Link>
                
                {
                    user?.uid ? <button onClick={() => signOut(auth)}>Sign Out</button> : <Link to='/login'>Sign In</Link>
                }
                
            </nav>            
        </div>
    );
};

export default Header;