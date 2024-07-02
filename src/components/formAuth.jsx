/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import "../../public/css/auth.css";

export const FormAuth = ({
  onSubmit,
  username,
  password,
  setUsername,
  setPassword,
  loginError,
}) => {

    const handleUsernameChange = (e) => {
        const value = e.target.value.trim()
        return setUsername(value)
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value.trim()
        return setPassword(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(e)
    }

  return (
    <div className="form-container">
      <div className="form-title-container">
        <h1 id="login">LOGIN</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs-container">
          <input
            type="text"
            placeholder="Email / Username"
            value={username}
            onChange={handleUsernameChange}
            className={loginError ? "input-error" : ""}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
            className={loginError ? "input-error" : ""}
          />
        </div>
        {loginError && (
          <div className="error-message">
            Usuário ou senha incorretos. Por favor, tente novamente.
          </div>
        )}
        <div className="form-button-login-container">
          <Button type="submit" className="btn btn-primary">
            Entrar
          </Button>
          <Button className="btn btn-secondary">Recuperar Senha</Button>
        </div>
      </form>
    </div>
  );
};
