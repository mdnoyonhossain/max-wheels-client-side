import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);


    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <h3 className="mb-4 font-bold text-3xl">My Order</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Meet Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) => <tr key={booking._id} className="hover">
                            <th>{i + 1}</th>
                            <th>{booking.productName}</th>
                            <td>{booking.userEmail}</td>
                            <td>${booking.productPrice}</td>
                            <td>{booking.location}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;