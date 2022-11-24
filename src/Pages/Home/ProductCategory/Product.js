import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ car }) => {
    const { name, picture, _id, category, sellername, price } = car;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex'>
                    <p>Category: <span className='text-[#37CDBE]'>{category}</span></p>
                    <p>Price: <span className='text-[#37CDBE]'>${price}</span></p>
                </div>
                <p><span className='text-[#37CDBE]'>Seller Name:</span> {sellername}</p>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/category/${_id}`}><button className="btn bg-[#37CDBE]">Category Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;