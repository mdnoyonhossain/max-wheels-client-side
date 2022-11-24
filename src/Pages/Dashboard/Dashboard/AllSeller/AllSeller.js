import React from 'react';

const AllSeller = () => {    

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr className="hover">
                        <th>1</th>
                        <td>name</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default AllSeller;