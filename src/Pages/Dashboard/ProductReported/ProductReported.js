import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ProductReported = () => {
    const [reportProduct, setReportProduct] = useState(null)

    const { data: reportToAdmin = [], refetch } = useQuery({
        queryKey: ['reportadmin'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportadmin')
            const data = res.json();
            return data;
        }
    })

    const handleReportProduct = report => {
        console.log(report._id);
        fetch(`http://localhost:5000/report/${report._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Reported Product Delete Successfully')
                    refetch()
                }
            })

    }

    return (
        <div className="overflow-x-auto">
            <h3 className="mb-4 font-bold text-3xl">Report Product</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Seller Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportToAdmin.map((reportadmin, i) => <tr key={reportadmin._id} className="hover">
                            <th>{i + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={reportadmin.picture} alt='' />
                                    </div>
                                </div>
                            </td>
                            <td>{reportadmin.productName}</td>
                            <td>{reportadmin.category}</td>
                            <td>{reportadmin.sellerName}</td>
                            <td><button className='btn btn-xs bg-green-500' disabled>Report</button></td>
                            <td><label htmlFor="buyer-delete" onClick={() => setReportProduct(reportadmin)} className="btn bg-red-500 btn-xs">Delete</label></td>
                        </tr>)
                    }

                </tbody>
            </table>
            {
                reportProduct && <>
                    <input type="checkbox" id="buyer-delete" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Seller Name: {reportProduct.sellerName}</h3>
                            <p className="py-4"><b>Product Name:</b> {reportProduct.productName}</p>
                            <p className=" text-2xl text-orange-500">Are you Sure Delete Seller</p>
                            <div className="modal-action">
                                <label onClick={() => handleReportProduct(reportProduct)} htmlFor="buyer-delete" className="btn bg-orange-500">Delete</label>
                                <label htmlFor="buyer-delete" className="btn bg-red-500">Cancel</label>
                            </div>
                        </div>
                    </div>
                </>}
        </div>
    );
};

export default ProductReported;