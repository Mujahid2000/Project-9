import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvide';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    console.log(user)

    if (loading)
        return <span className="loading mt-28 flex justify-center items-end mx-auto loading-spinner loading-lg"></span>

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};



export default PrivateRoute;