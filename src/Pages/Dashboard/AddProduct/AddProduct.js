import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleAddProduct = data => {
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_IMG_KEY}`, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const product = {
                        picture: imageData.data.url,
                        name: data.name,
                        category: data.category,
                        price: data.price,
                        location: data.location,
                        orginalprice: data.orginalprice,
                        useyear: data.useyear,
                        desc: data.description,
                        phone: data.phone,
                        sellername: user?.displayName,
                        email: user?.email
                    }
                    fetch('https://maxwheels-server.vercel.app/productCategory', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if(data.acknowledged){
                                toast.success(`Product Create Successfully`);
                                navigate('/dashboard/myproduct');
                            }
                        })
                }
            })
    }

    const { data: category = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://maxwheels-server.vercel.app/category');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-black">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Add a Prodcut</h1>
            </div>
            <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <fieldset className="w-full space-y-1 dark:text-gray-100">
                        <label htmlFor="files" className="block text-sm font-medium">Product Image</label>
                        <div className="flex">
                            <input type="file" {...register('image')} className="px-2 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" required/>
                        </div>
                    </fieldset>
                    <div>
                        <label className="block mb-2 text-sm">Product Name</label>
                        <input type="text" {...register('name')} className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" style={{ border: '1px solid green' }} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Category</label>
                        <select {...register('category')} className="select select-secondary w-full" style={{border: '1px solid green'}} required>
                            {
                                category.map(cat => <option key={cat._id}>{cat.category}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Sell Price</label>
                        <input type="text" {...register('price')} className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" style={{ border: '1px solid green' }} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Location</label>
                        <input type="text" {...register('location')} className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" style={{ border: '1px solid green' }} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Orginal Price</label>
                        <input type="text" {...register('orginalprice')} className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" style={{ border: '1px solid green' }} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Use Year</label>
                        <input type="text" {...register('useyear')} className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" style={{ border: '1px solid green' }} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Phone Number</label>
                        <input type="text" {...register('phone')}  className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" style={{ border: '1px solid green' }} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Description</label>
                        <textarea {...register('description')} className="textarea textarea-secondary w-full px-3 py-2 border rounded-md border-gray-700 text-black" placeholder="Description" style={{ border: '1px solid green' }}></textarea>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-orange-500 text-white">Add Product</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;