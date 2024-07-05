import { useState } from "react";
import "../../public/css/header.css";
import ProfileCard from "./ProfileCard.jsx";
import { ImgComponent } from "../components/ImgComponent.jsx";
import Perfil from "../../public/imgs/perfil.png"; // Importe diretamente a imagem

export const HeaderComponent = ({ title }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleCloseProfile = () => {
        setIsProfileOpen(false);
    };

    const imgConfig = {
        src: Perfil,
        alt: "Perfil",
        width: "80px",
        height: "80px",
    };

    return (
        <header>
            <h2>{title}</h2>
            <div className="perfil" onClick={handleProfileClick}>
                <ImgComponent
                    src={imgConfig.src}
                    alt={imgConfig.alt}
                    width={imgConfig.width}
                    height={imgConfig.height}
                />
            </div>
            <ProfileCard isOpen={isProfileOpen} onClose={handleCloseProfile} />
        </header>
    );
};
