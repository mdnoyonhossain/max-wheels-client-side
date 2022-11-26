import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advatise = () => {

    const { data: productCategory = [] } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await fetch('https://maxwheels-server.vercel.app/productCategory');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mb-8'>
            <h1 className="heading"> <span>Advertised</span> items </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    productCategory.map(advice => <> {advice.available && advice.advertise && <div key={advice._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={advice.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{advice.name}</h2>
                            <p>{advice.desc}</p>
                            <p>Price: ${advice.price}</p>
                            <p>Category: {advice.category}</p>
                        </div>
                    </div>}</>)
                }
            </div>
        </div>
    );
};

export default Advatise;