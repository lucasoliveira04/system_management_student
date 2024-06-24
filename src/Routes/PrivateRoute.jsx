import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    if (localStorage.getItem("token")){
        return children
    } 

    if (!localStorage.getItem("token")){
        return <Navigate to={"/auth"}/>
    }
}

export default PrivateRoute