import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, userPorfileNameUpdate, googleSignInUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                userNameUpdate(data.name);
                saveUser(data.name, data.email, data.role)
                navigate(from, { replace: true })
                toast.success('SignUp Successfully')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const userNameUpdate = name => {
        const profile = {
            displayName: name
        }
        userPorfileNameUpdate(profile)
            .then(() => { })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const userGoogleSignIn = (data) => {
        googleSignInUser()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Google Signin Successfully')
                saveUser(user?.displayName, user?.email, data.role)
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://maxwheels-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='flex justify-center my-20'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white text-black" style={{ border: '1px solid black' }}>
                <h1 className="text-2xl font-bold text-center">SignUp</h1>
                <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Name</label>
                        <input type="text" {...register('name')} style={{ border: '1px solid black' }} className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 " required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Email</label>
                        <input type="email" {...register('email')} style={{ border: '1px solid black' }} className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 " required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input type="password" {...register('password')} style={{ border: '1px solid black' }} className="w-full px-4 py-3 rounded-md  bg-white  text-gray-800 " required />

                    </div>

                    <div className='bg-white p-3 rounded'>
                        <input type="radio" id='buyer' name="radio-4" value='buyer' {...register('role')} className="radio radio-accent" checked style={{ border: '2px solid black' }} />
                        <label htmlFor="buyer" className='m-5'>Buyer Account</label> <br />
                        <input type="radio" id='seller' name="radio-4" value='seller' {...register('role')} className="radio radio-accent" style={{ border: '2px solid black' }} />
                        <label htmlFor="seller" className='m-5'>Seller Account</label>
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm text-white bg-accent">Register</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-800">OR</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleSubmit(userGoogleSignIn)} className="block w-full p-3 text-center rounded text-white btn btn-outline btn-accent" style={{ border: '1px solid green' }}>CONTINUE WITH GOOGLE</button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-800">Already have an account
                    <Link to="/login" className="text-primary font-bold"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;