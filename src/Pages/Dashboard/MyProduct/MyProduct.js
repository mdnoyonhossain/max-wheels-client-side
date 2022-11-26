import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProduct = () => {
    const [myProducts, setMyProducts] = useState(null);
    const {user} = useContext(AuthContext);

    const { data: productCategory = [], refetch } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dashboard/productCategory?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handlePorductAvailable = id => {
        fetch(`http://localhost:5000/available/admin/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Product Available Successfull');
                refetch();
            }
        })
    }

    const handlePorductAdvertise = id => {
        fetch(`http://localhost:5000/advertise/admin/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Product Advertise Successfull');
                refetch();
            }
        })
    }

    const handleMyProductDelete = product => {
        fetch(`http://localhost:5000/productCategory/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Product Deleting Successfully');
                    refetch()
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <h3 className="mb-4 font-bold text-3xl">My Product</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Advertise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productCategory.map((myproduct, i) => <tr key={myproduct._id} className="hover">
                            <th>{i + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={myproduct.picture} alt="" />
                                    </div>
                                </div>
                            </td>
                            <td>{myproduct.name}</td>
                            <td>{myproduct.category}</td>
                            <td>${myproduct.price}</td>
                            <td>{ myproduct.available !== 'available' && <button onClick={() => handlePorductAvailable(myproduct._id)} className='btn bg-red-500 btn-xs'>Available</button>}</td>
                            <td>{ myproduct.advertise !== 'advertise' && <button onClick={() => handlePorductAdvertise(myproduct._id)} className='btn bg-green-500 btn-xs'>Advertise</button>}</td>
                            <td><label htmlFor="myproduct-delete" onClick={() => setMyProducts(myproduct)} className="btn btn-xs">Delete</label></td>
                        </tr>)
                    }

                </tbody>
            </table>
            {
                myProducts && <>
                    <input type="checkbox" id="myproduct-delete" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">User Name: </h3>
                            <p className="py-4"><b>Buyer Email:</b> </p>
                            <p className=" text-2xl text-orange-500">Are you Sure Delete Seller</p>
                            <div className="modal-action">
                                <label onClick={() => handleMyProductDelete(myProducts)} htmlFor="myproduct-delete" className="btn bg-orange-500">Delete</label>
                                <label htmlFor="myproduct-delete" className="btn bg-red-500">Cancel</label>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default MyProduct;