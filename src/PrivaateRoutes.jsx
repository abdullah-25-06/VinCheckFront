import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {


    const auth = {'token' : localStorage.getItem("IsloggedIn") ?localStorage.getItem("IsloggedIn"):0 }



    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;

