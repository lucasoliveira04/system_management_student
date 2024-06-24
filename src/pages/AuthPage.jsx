import { Helmet } from "react-helmet";
import "../../public/css/auth.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [redirectToHomeAdmin, setRedirectToHomeAdmin] = useState(false);
  const [loginError, setLoginError] = useState(false); 


  const handleLogin = async (e) => {
    e.preventDefault(); 
    const success = await login(username, password);
    if (success) {
      setRedirectToHomeAdmin(true);
    } else {
      setLoginError(true); 
    }
  };

  if (redirectToHomeAdmin) {
    return <Navigate to="/home-admin" />;
  }

  return (
    <div className="container">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="form-container">
        <div className="form-title-container">
          <h1 id="login">LOGIN</h1>
        </div>
        <form onSubmit={handleLogin}> 
          <div className="form-inputs-container">
            <input
              type="text"
              placeholder="Email / Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={loginError ? 'input-error' : ''} 
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={loginError ? 'input-error' : ''} 
            />
          </div>
          {loginError && ( 
            <div className="error-message">
              Usuário ou senha incorretos. Por favor, tente novamente.
            </div>
          )}
          <div className="form-button-login-container">
            <Button
              type="submit"
              className="btn btn-primary"
            >
              Entrar
            </Button>
            <Button className="btn btn-secondary">Recuperar Senha</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
