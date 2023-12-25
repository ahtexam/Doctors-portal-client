import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user,loading}= useContext(AuthContext);
    const locartion = useLocation();
      if (loading){
        return <span className="loading loading-dots loading-xs"></span>;
      }
      if (user){
        return children;
      }
    return  <Navigate to="/Login" state={{from: locartion}} replace></Navigate>;
};

export default PrivateRoutes;