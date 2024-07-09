
import {useEffect, useState} from 'react';
import perfil from "../../public/imgs/perfil.png";
import "../../public/css/profileCard.css";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import {NotFoundData} from "./NotFoundData.jsx";
import {FormAlterarSenha} from "./FormAlterarSenha.jsx";
import {BsArrowLeft} from "react-icons/bs";

const ProfileCard = ({ isOpen, onClose }) => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [email, setEmail] = useState(userData ? userData.email : '');
  const [password, setPassword] = useState('');

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

  const handleOpenFormAlterarPassword = () => {
    setIsChangingPassword(true)
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Password write: ", {email, password})
    setIsChangingPassword()
  }

  return (
      <div className="profile-card">
        {isChangingPassword ? (
            <div className="form-container-password">
              <div className="form-container-title-password">
                <h1><BsArrowLeft onClick={() => setIsChangingPassword(false)} style={{cursor: "pointer"}}/> Alterar
                  Senha</h1>
              </div>
              <FormAlterarSenha
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  onSubmit={handlePasswordSubmit}
              />
            </div>
        ) : (
            <>
              {userData && <NotFoundData userData={userData}/>}

              {userData && (
                  <div className="header-top">
                    <p
                        style={{cursor: "pointer"}}
                        className="trocar-senha"
                        onClick={handleOpenFormAlterarPassword}
                    >
                      Alterar senha
                    </p>
                    <p style={{fontWeight: "900" }}>{userData.typeUser}</p>
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
            </>
        )}
      </div>
  );
};

export default ProfileCard;
