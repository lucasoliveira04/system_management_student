import { Navigate } from "react-router-dom"

export const RedirectToPage = ({url}) => {
    return(
        <Navigate to={url}/>
    )
}