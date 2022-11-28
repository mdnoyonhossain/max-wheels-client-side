import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Product = ({ car, productLoading }) => {
    const { name, picture, publishDate, conditionType, _id, category, price } = car;

    if(productLoading){
        return <Loading></Loading>
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex'>
                    <p>Category: <span className='text-[#37CDBE]'>{category}</span></p>
                    <p>Price: <span className='text-[#37CDBE]'>${price}</span></p>
                </div>
                <div className='flex'>
                <p>Publish: <span className='text-[#37CDBE]'>{publishDate}</span></p>
                <p>Type: <span className='text-[#37CDBE]'>{conditionType}</span></p>
                </div>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/category/${_id}`}><button className="btn bg-[#37CDBE]">Product Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;