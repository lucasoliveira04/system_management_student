import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PrivateRoute = ({children}) => {
    const {authToken} = useAuth()

    if (!authToken){
        return <Navigate to={"/auth"}/>
    }

    return children
}

export default PrivateRoute