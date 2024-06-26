import { Helmet } from "react-helmet";
import "../../public/css/auth.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { FormAuth } from "../components/formAuth";
import { RedirectToPage } from "../components/redirectPage";

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
    return <RedirectToPage url={"/home-admin"}/>
  }

  return (
    <div className="container">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <FormAuth
        onSubmit={handleLogin}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        loginError={loginError}
      />
      
    </div>
  );
};
