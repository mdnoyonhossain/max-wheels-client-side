import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    return (
        <div>
            <h1 class="heading"> <span>Product</span> Category </h1>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-white text-black">
               
                <Link  href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-black text-black hover:text-white hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                    <span>Consectetur</span>
                </Link>
                <Link  href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-black text-black hover:text-white hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                    <span>Consectetur</span>
                </Link>
                <Link  href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-black text-black hover:text-white hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                    <span>Consectetur</span>
                </Link>
                
            </div>
        </div>
    );
};

export default ProductCategory;