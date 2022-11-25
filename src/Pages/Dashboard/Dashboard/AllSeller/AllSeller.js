import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';

const AllSeller = () => {
    const [deleteingSeller, setDeletingSeller] = useState(null)
    const { data: allSeller = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/?email=seller')
            const data = await res.json();
            return data;
        }
    });


    const handleSellerDelete = seller => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Seller Deleting Successfully');
                    refetch()
                }
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <h3 className="mb-4 font-bold text-3xl">All Seller</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSeller.map((seller, i) => <tr key={seller._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{seller.role}</td>
                            <td><label onClick={() => setDeletingSeller(seller)} htmlFor="seller-delete" className="btn btn-xs">Delete</label></td>

                        </tr>)
                    }

                </tbody>
            </table>
            {
                deleteingSeller && <>
                    <input type="checkbox" id="seller-delete" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{deleteingSeller.name}</h3>
                            <p className="py-4"><b>Seller Email:</b> {deleteingSeller.email}</p>
                            <p className=" text-2xl text-orange-500">Are you Sure Delete Seller</p>
                            <div className="modal-action">
                                <label onClick={() => handleSellerDelete(deleteingSeller)} htmlFor="seller-delete" className="btn bg-orange-500">Delete</label>
                                <label htmlFor="seller-delete" className="btn bg-red-500">Cancel</label>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>

    );
};

export default AllSeller;