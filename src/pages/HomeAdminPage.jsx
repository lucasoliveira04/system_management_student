import { HeaderComponent } from "../components/header";
import { TableStudents } from "../containers/tableStudents.jsx";
import "../../public/css/homePageAdmin.css"
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export const HomePageAdmin = () => {
    const {logout} = useAuth()

    useEffect(() => {
        verificarBearer()
    }, [])

    async function verificarBearer(){
        let encryptedToken   = localStorage.getItem('token')
        if (encryptedToken ){
            const token = atob(encryptedToken)
            
            try{
                const response = await fetch('http://localhost:8080/auth/verify-token', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                if (response.ok){
                    response
                } else {
                   response.status
                    logout()
                }
            } catch (error){
                console.error(error);
                logout()
            }
        }

        
    }

    return(
        <div>
            <HeaderComponent
                title={"Escola Jorgina"}
            />
            <div className="container-admin">
                <div className="actions-container">

                </div>
                <div className="table-container">
                    <TableStudents/>
                </div>
            </div>
        </div>
    )
}
