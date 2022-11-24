import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 m-auto">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Max <span className='text-yellow-500'>wheels</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>Item 1</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;