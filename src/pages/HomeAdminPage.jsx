import { HeaderComponent } from "../components/header";
import { TableStudents } from "../components/tableStudents";
import { ActionsToStudents} from "../components/actionsTableToStudents"
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
            console.log("Seu token: "+ token)
            
            try{
                const response = await fetch('http://localhost:8080/api/auth/verify-token', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                if (response.ok){
                    console.log("Token is valid: ", response)
                } else {
                    console.log("Token verification failed with status: ", response.status)
                    logout()
                }
            } catch (error){
                console.error(error);
                logout()
            }
        } else {
            console.log("No token found")
        }

        
    }

    return(
        <div>
            <HeaderComponent/>
            <div className="container-admin">
                <div className="actions-container">
                    <ActionsToStudents/>
                </div>
                <div className="table-container">
                    <TableStudents/>
                </div>
            </div>
        </div>
    )
}
