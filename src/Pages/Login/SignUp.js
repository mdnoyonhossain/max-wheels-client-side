import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {register, handleSubmit} = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='flex justify-center my-20'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white text-black" style={{border: '1px solid black'}}>
                <h1 className="text-2xl font-bold text-center">SignUp</h1>
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Name</label>
                        <input type="text" {...register('name')} placeholder="Eamil" style={{ border: '1px solid black' }} className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Name</label>
                        <input type="email" {...register('email')} placeholder="Eamil" style={{ border: '1px solid black' }} className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input type="password" {...register('password')} style={{ border: '1px solid black' }} placeholder="Password" className="w-full px-4 py-3 rounded-md  bg-white  text-gray-800 " />
                        
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-white bg-accent">Register</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-800">OR</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="block w-full p-3 text-center rounded text-white btn btn-outline btn-accent" style={{border: '1px solid green'}}>CONTINUE WITH GOOGLE</button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-800">Already have an account
                    <Link to="/login" className="text-primary font-bold"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;