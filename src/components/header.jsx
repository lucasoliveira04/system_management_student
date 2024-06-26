import { useState } from "react"
import "../../public/css/header.css"
import perfil from "../../public/imgs/perfil.png"
import ProfileCard from "./ProfileCard"

export const HeaderComponent = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen)
    }


    const handleCloseProfile = () => {
        setIsProfileOpen(false)
    }
    return(
        <header>
            <h2>Nome escola</h2>
            <div className="perfil" onClick={handleProfileClick}>
                <img 
                    src={perfil} 
                    width={"80px"}
                    height={"80px"}
                    alt="" />
            </div>

            <ProfileCard isOpen={isProfileOpen} onClose={handleCloseProfile}/>
        </header>
    )
}