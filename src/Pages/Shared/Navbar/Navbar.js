import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const userLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="navbar bg-base-100 w-11/12 m-auto">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Max <span className='text-yellow-500'>wheels</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><button onClick={userLogOut}>Signout</button></li>
                            </>
                            :
                            <li><Link to="/login">Login</Link></li>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;