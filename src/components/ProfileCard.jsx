
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import perfil from "../../public/imgs/perfil.png";
import "../../public/css/profileCard.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ isOpen, onClose }) => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const maskData = (value, type) => {
    if (!value) return "";

    switch (type) {
      case "rg":
        if (value.length < 3) {
          return value;
        }
        return "***" + value.slice(3);
      case "cpf":
        if (value.length < 5) {
          return value;
        }
        return "***" + value.slice(3, -2) + "**";
      default:
        return value;
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/auth");
  };

  if (!isOpen) return null;

  return (
    <div className="profile-card">
      {userData && (
        <div className="header-top">
          <p style={{ cursor: "pointer" }} className="trocar-senha">
            Alterar senha
          </p>
          <p style={{ fontWeight: "900" }}>{userData.typeUser}</p>
        </div>
      )}
      <img src={perfil} width={"100px"} height={"100px"} alt="Perfil" />
      <p style={{ fontWeight: "900" }}>Informações do perfil</p>

      {userData && (
        <div>
          <p>Nome : {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>
            Username: {userData.registerDto && userData.registerDto.username}
          </p>
          <p>RG: {maskData(userData.rg, "rg")}</p>
          <p>CPF: {maskData(userData.cpf, "cpf")}</p>
        </div>
      )}

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={onClose}>Fechar</button>
        <button id="logout" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
