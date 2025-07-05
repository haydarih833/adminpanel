import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


// const PrivateRoute = () => {
//     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
//     return isAuthenticated ? <Outlet/> : <Navigate to='/' />
// };

// export default PrivateRoute;

export default function PrivateRoute({ children }) {
    const { user } = useSelector((state) => state.auth)

    return user ? children : <Navigate to="/" replace />
}