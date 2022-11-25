import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyer = () => {
    const [buyerDelete, setBuyerDelete] = useState(null)

    const { data: allbuyer = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/?email=buyer');
            const data = await res.json();
            return data;
        }
    });

    const handleBuyerDelete = buyer => {
        console.log(buyer._id);
        fetch(`http://localhost:5000/users/${buyer._id}`, {
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

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <h3 className="mb-4 font-bold text-3xl">All Buyer</h3>
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
                        allbuyer.map((buyer, i) => <tr key={buyer._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td>{buyer.role}</td>
                            <td><label htmlFor="buyer-delete" onClick={() => setBuyerDelete(buyer)} className="btn btn-xs">Delete</label></td>
                        </tr>)
                    }

                </tbody>
            </table>
            {
               buyerDelete && <>
                    <input type="checkbox" id="buyer-delete" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{buyerDelete.name}</h3>
                            <p className="py-4"><b>Seller Email:</b> {buyerDelete.email}</p>
                            <p className=" text-2xl text-orange-500">Are you Sure Delete Seller</p>
                            <div className="modal-action">
                                <label onClick={() => handleBuyerDelete(buyerDelete)}  htmlFor="buyer-delete" className="btn bg-orange-500">Delete</label>
                                <label htmlFor="buyer-delete" className="btn bg-red-500">Cancel</label>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default AllBuyer;