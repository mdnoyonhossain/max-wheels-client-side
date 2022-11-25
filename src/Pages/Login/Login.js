import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {register, handleSubmit} = useForm();
    const {userSingIn, googleSignInUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = data => {
        userSingIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            navigate(from, {replace: true})
            toast.success('Login Successfully.')
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    
    const userGoogleSignIn = () => {
        googleSignInUser()
        .then(result => {
            const user = result.user;
            toast.success('Google Signin Successfully')
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <div className='flex justify-center my-20'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white text-black" style={{border: '1px solid black'}}>
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Email</label>
                        <input type="email" {...register('email')} placeholder="Eamil" style={{ border: '1px solid black' }} className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 " required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input type="password" {...register('password')} style={{ border: '1px solid black' }} placeholder="Password" className="w-full px-4 py-3 rounded-md  bg-white  text-gray-800 " required/>
                        
                        <div className="flex justify-end text-xs text-gray-800">
                            <Link>Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-white bg-accent">LOGIN</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-800">OR</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={userGoogleSignIn} className="block w-full p-3 text-center rounded text-white btn btn-outline btn-accent" style={{border: '1px solid green'}}>CONTINUE WITH GOOGLE</button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-800">New to Doctors Portal
                    <Link to="/signup" className="text-primary font-bold"> Create new Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;