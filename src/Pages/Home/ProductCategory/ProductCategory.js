import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductCategory = () => {
    const [productCar, setProductCar] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/productCategory')
            .then(res => res.json())
            .then(data => {
                setProductCar(data)
            })
    }, []);

    const { data: categorys = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 class="heading"> <span>Product</span> Category </h1>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-white text-black w-11/12 m-auto">
                {
                    categorys.map(category => <Link key={category._id} href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-black text-black hover:text-white hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>
                        <span>{category.category}</span>
                    </Link>)
                }

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    productCar.map(car => <Product key={car._id} car={car}></Product>)
                }
            </div>
        </div>
    );
};

export default ProductCategory;