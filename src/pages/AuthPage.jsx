import { Helmet } from "react-helmet";
import "../../public/css/auth.css";
import { Button } from "react-bootstrap";

export const AuthPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="form-container">
        <div className="form-title-container">
          <h1 id="login">LOGIN</h1>
        </div>
        <div className="form-inputs-container">
          <input 
            type="text" 
            placeholder="Email / Username"
          />
          <input 
            type="password" 
            placeholder="Senha"
          />
        </div>
        <div className="form-button-login-container">
          <Button className="btn btn-primary">Entrar</Button>
          <Button className="btn btn-secondary">Recuperar Senha</Button>
        </div>
      </div>
    </div>
  );
};
