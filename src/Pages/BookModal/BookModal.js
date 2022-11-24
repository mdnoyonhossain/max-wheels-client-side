import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookModal = ({categoryDetails}) => {
    const {user} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const productPrice = form.productPrice.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {
            productName,
            userName,
            userEmail,
            productPrice,
            location,
            phone
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset()
                toast.success(`${userName} Your Booking Successfully`)
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <div className='flex justify-center'>
                        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white text-black">
                            <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-1 text-sm">
                                    <input type="text" name='productName' defaultValue={categoryDetails.name} readOnly style={{ border: '1px solid black' }} className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 " required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <input type="text" name='userName' style={{ border: '1px solid black' }} defaultValue={user?.displayName} readOnly className="w-full px-4 py-3 rounded-md  bg-white  text-gray-800 " required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <input type="text" name='userEmail' style={{ border: '1px solid black' }} defaultValue={user?.email} readOnly className="w-full px-4 py-3 rounded-md  bg-white  text-gray-800 " required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <input type="text" name='productPrice' style={{ border: '1px solid black' }} defaultValue={categoryDetails.price} readOnly className="w-full px-4 py-3 rounded-md  bg-white  text-gray-800 " required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <input type="text" name='location' style={{ border: '1px solid black' }} placeholder="Meeting location" className="w-full px-4 py-3 rounded-md  bg-white  text-gray-800 " required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <input type="text" name='phone' style={{ border: '1px solid black' }} placeholder="Phone Number" className="w-full px-4 py-3 rounded-md  bg-white  text-gray-800 " required />
                                </div>
                                <button className="block w-full p-3 text-center rounded-sm text-white bg-accent">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookModal;