import { Navigate } from "react-router-dom";
import { useAuth as useAuthContext } from "../context/useAuth"

export default function ProtectedRoute({children}) {
    const {isAuthenticated, isLoading} = useAuthContext();
    console.log(isAuthenticated);
    if(isLoading) return <p className="loading">Loading...</p>
    if(!isAuthenticated) return <Navigate to='/login' replace/>

    return children
}
