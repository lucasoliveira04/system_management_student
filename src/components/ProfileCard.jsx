import perfil from '../../public/imgs/perfil.png';
import '../../public/css/profileCard.css'
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const ProfileCard = ({ isOpen, onClose}) => {

    if (!isOpen) return null;

    return (
        <div className="profile-card">
            <img src={perfil} width={"100px"} height={"100px"} alt="Perfil" />
            <p>Informações do perfil</p>
            <button onClick={onClose}>Fechar</button>
        </div>
    )
}

export default ProfileCard;