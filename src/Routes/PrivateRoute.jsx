import { RedirectToPage } from "../components/redirectPage"

const PrivateRoute = ({children}) => {
    if (localStorage.getItem("token")){
        return children
    } 

    if (!localStorage.getItem("token")){
        return <RedirectToPage url={"/auth"}/>
    }
}

export default PrivateRoute