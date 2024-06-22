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

  const handleLogin = async (e) => {
    e.preventDefault(); 
    const success = await login(username, password);
    if (success) {
      setRedirectToHomeAdmin(true);
    } else {
      console.log('error');
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
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
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
