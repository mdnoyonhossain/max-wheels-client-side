import React, { Children, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loading from '../Pages/Shared/Loading/Loading';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    }

    if(user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;